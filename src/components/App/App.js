import './App.css';
import {React, useState, useEffect} from "react";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Navigation from "../Navigation/Navigation";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import auth from "../../utils/Auth";
import {UserContext} from "../../context/UserContext";
import ProtectedRoute from "../../utils/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [filterMovies, setFilterMovies] = useState([]);
  const [movies, setMovies] = useState(null);
  const [firstMoviesAmount, setFirstMoviesAmount] = useState(0);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [addMoviesAmount, setAddMoviesAmount] = useState(0);
  const [isMore, setIsMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [isFilterChecked, setIsFilterChecked] = useState(false);
  const [isFilterCheckedMoviesSaved, setIsFilterCheckedMoviesSaved] = useState(false);
  const [isInputMoviesSaved, setIsInputMoviesSaved] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageProfile, setErrorMessageProfile] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(loggedIn)
  const cbCheckToken = () => {
    const jwt = localStorage.getItem("jwt")
    console.log(jwt)
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          console.log(res);
          if (res) {
            setLoggedIn(true);
            navigate("/", {replace: true});
          }
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    cbCheckToken();
  }, []);

  useEffect(() => {
    // setIsPreloaderLoading(true);
    if (loggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies()])
        .then(([data, movies]) => {
          setCurrentUser(data.user);
          setSavedMovies(movies);
        })
        .catch((err) => console.log(err))
      // .finally(() => setIsPreloaderLoading(false));
    }
  }, [loggedIn]);

  useEffect(() => {
    // setIsPreloaderLoading(true);
    if ((location.pathname === '/saved-movies')) {
      mainApi.getSavedMovies()
        .then((movies) => {
          // setNothingFoundInSaved('');
          setIsFilterCheckedMoviesSaved(false);
          setSavedMovies(movies);
        })
        .catch((err) => console.log(err));
    } else if (location.pathname === '/movies') {
      if (localStorage.isFilterChecked === 'true') {
        setIsFilterChecked(true);
      } else setIsFilterChecked(false)
    } else if (location.pathname === '/profile') {
      setIsEditing(false);
      setErrorMessageProfile('');
    }
    // setIsPreloaderLoading(false);
  }, [location]);

  function handleSaveMovie(movie) {
    if (movie.isSaved) {
      let movieForDelete = savedMovies.find(mov => (mov.movieId === movie.id));
      mainApi.deleteMovie(movieForDelete?._id)
        .then((newMovie) => {
          movie.isSaved = false;
          const renderedMovies = (movies.map((mov) => (mov.id === movie.id ? movie : mov)));
          localStorage.setItem('renderedMovies', JSON.stringify(renderedMovies));
          setMovies(renderedMovies);
          setSavedMovies(savedMovies.filter((mov) => mov.movieId !== newMovie.myMovie.movieId));
        })
        .catch((err) => console.log(err));
    } else {
      mainApi.saveMovie(movie)
        .then((newMovie) => {
          movie.isSaved = true;
          setSavedMovies([...savedMovies, newMovie]);
          const renderedMovies = (movies.map((mov) => (mov.id === newMovie.movieId ? movie : mov)));
          localStorage.setItem('renderedMovies', JSON.stringify(renderedMovies));
          setMovies(renderedMovies);
        })
        .catch((err) => console.log(err));
    }
  }

  function handleDeleteMovie(movie) {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) => state.filter((mov) => mov._id !== movie._id));
        movie.isSaved = false;
        let renderedMovies = (movies.map((mov) => (mov.id === movie.movieId ? movie : mov)));
        localStorage.setItem('renderedMovies', JSON.stringify(renderedMovies));
        setMovies(renderedMovies);
      })
      .catch((err) => console.log(err));
  }

  function handleSavedFilterCheck(checked) {
    setIsLoading(true);
    mainApi.getSavedMovies()
      .then((data) => {
        let filtered = handleFilterMovies(checked, data, isInputMoviesSaved);
        if (filtered.length === 0) {
          // setNothingFoundInSaved('Ничего не найдено');
        } else {
          // setNothingFoundInSaved('');
          setSavedMovies(filtered);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function handleSavedMovieSearch(input) {
    setIsLoading(true);
    setIsInputMoviesSaved(input.input);
    mainApi.getSavedMovies()
      .then((data) => {
        let filtered = handleFilterMovies(isFilterCheckedMoviesSaved, data, input.input);
        if (filtered.length === 0) {
          // setNothingFoundInSaved('Ничего не найдено');
        } else {
          // setNothingFoundInSaved('');
          setSavedMovies(filtered);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function handleRegister(formValue) {
    setIsAuthLoading(true);
    auth
      .register(formValue.email, formValue.password, formValue.name)
      .then((res) => {
        if (res) {
          handleLogin(formValue);
        }
      })
      .catch((err) => {
        setErrorMessage(err.message);
      })
      .finally(() => setIsAuthLoading(false));
  }

  function handleLogin(formValue) {
    setIsAuthLoading(true);
    auth
      .authorize(formValue.email, formValue.password)
      .then((res) => {
        if (res.token) {
          console.log(res);
          setLoggedIn(true);
          navigate("/movies", {replace: true});
        }
      })
      .catch((err) => {
        if (err.statusCode === 400) {
          setErrorMessage(err.validation.body.message);
        } else {
          setErrorMessage(err.message);
        }
      })
      .finally(() => setIsAuthLoading(false));
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window
    return {innerWidth, innerHeight};
  }

  function setMoviesAmounts() {
    if (windowSize.innerWidth > 1007) {
      setFirstMoviesAmount(12);
      setAddMoviesAmount(3);
    } else if (windowSize.innerWidth > 760) {
      setFirstMoviesAmount(8);
      setAddMoviesAmount(2);
    } else {
      setFirstMoviesAmount(5);
      setAddMoviesAmount(2);
    }
  }

  useEffect(() => {
    setMoviesAmounts();
    if (localStorage.renderedMovies) {
      setMovies(JSON.parse(localStorage.renderedMovies));
    }
  }, [windowSize]);

  function handleAddMoreMovie() {
    setMovies(filterMovies.slice(0, movies.length + addMoviesAmount) || filterMovies);
    if (filterMovies.length <= movies.length + addMoviesAmount) {
      setIsMore(false);
    } else setIsMore(true);
  }

  function handleFilterMovies(checkbox, data, inputData) {
    if (checkbox) {
      return data.filter(movie => (movie.duration < 40) && (movie.nameRU.toLowerCase().includes(inputData.toLowerCase())));
    } else {
      return data.filter(movie => movie.nameRU.toLowerCase().includes(inputData.toLowerCase()));
    }
    ;
  }

  function handleRenderMovies(filteredArr) {
    if (filteredArr.length === 0) {
      localStorage.setItem('nothingFound', 'Ничего не найдено');
      localStorage.setItem('renderedMovies', '');
    } else {
      setFilterMovies(filteredArr);
      const renderedMovies = filteredArr.slice(0, firstMoviesAmount) || filteredArr;
      setMovies(renderedMovies);
      localStorage.setItem('renderedMovies', JSON.stringify(renderedMovies));
      localStorage.setItem('nothingFound', '');
    }
    if (filteredArr.length <= firstMoviesAmount) {
      setIsMore(false);
    } else setIsMore(true);
  }

  function handleMovieSearch(input) {
    setIsLoading(true);
    localStorage.setItem('input', input.input)
    moviesApi.getMovies()
      .then((data) => {
        const filtered = handleFilterMovies((localStorage.isFilterChecked === 'true'), data, input.input);
        handleRenderMovies(filtered);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function handleFilterCheck(checked) {
    if (checked) {
      localStorage.setItem('isFilterChecked', true);
    } else localStorage.setItem('isFilterChecked', false);
    if (localStorage.input) {
      setIsLoading(true);
      moviesApi.getMovies()
        .then((data) => {
          let filtered = handleFilterMovies(checked, data, localStorage.input);
          handleRenderMovies(filtered);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function onEditProfileSubmit(formValue) {
    setIsLoading(true);
    mainApi.editProfile(formValue)
      .then((data) => {
        setCurrentUser(data.user);
        setErrorMessageProfile('');
        setIsEditing(false);
      })
      .catch((err) => {
        setErrorMessageProfile(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogout() {
    auth.logout()
      .then((data) => {
        console.log(data.message);
        localStorage.clear();
        setMovies([]);
        setSavedMovies([]);
        setLoggedIn(false);
        setFilterMovies([]);
        setErrorMessage('');
        setIsFilterChecked(false);
        setIsFilterCheckedMoviesSaved(false);
        setCurrentUser(false);
        setErrorMessageProfile(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <UserContext.Provider value={currentUser}>
      <div className="app">
        <Header
          onOpenMenu={() => setIsMenuOpen(true)}
          loggedIn={loggedIn}
        />
        <Routes>
          <Route
            path='*'
            element={<PageNotFound/>}
          />
          <Route
            path="/"
            element={<Main/>}
          />
          <Route
            path="/signup"
            element={
              <Register
                handleRegister={handleRegister}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                isAuthLoading={isAuthLoading}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                handleLogin={handleLogin}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                isAuthLoading={isAuthLoading}
              />
            }
          />
          <Route
            path='/movies'
            element={
              <ProtectedRoute
                element={Movies}
                handleSearch={handleMovieSearch}
                movies={movies}
                onAddMore={handleAddMoreMovie}
                isMore={isMore}
                isLoading={isLoading}
                isChecked={isFilterChecked}
                setIsChecked={setIsFilterChecked}
                onFilterCheckbox={handleFilterCheck}
                onSaveMovie={handleSaveMovie}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                isLoading={isLoading}
                onLogout={handleLogout}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                onEditProfileSubmit={onEditProfileSubmit}
                errorMessageProfile={errorMessageProfile}
                loggedIn={loggedIn}
                buttonDisabled={buttonDisabled}
                setButtonDisabled={setButtonDisabled}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                element={SavedMovies}
                onAddMore={handleAddMoreMovie}
                isLoading={isLoading}
                savedMovies={savedMovies}
                onFilterCheckbox={handleSavedFilterCheck}
                isChecked={isFilterCheckedMoviesSaved}
                setIsChecked={setIsFilterCheckedMoviesSaved}
                onMovieSearch={handleSavedMovieSearch}
                onDeleteMovie={handleDeleteMovie}
                loggedIn={loggedIn}
              />
            }
          />
        </Routes>
        <Footer/>
        <Navigation
          isOpen={isMenuOpen}
          onClose={closeMenu}/>
      </div>
    </UserContext.Provider>
  );
}

export default App;
