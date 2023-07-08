import './App.css';
import React from "react";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import { Routes, Route } from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Navigation from "../Navigation/Navigation";
// import {Navigate} from "react-router-dom";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  // const isOpen = isMenuOpen

  function closeMenu () {
    setIsMenuOpen(false);
  }

  return (
    <div className="App">
      <Header
      onOpenMenu={() => setIsMenuOpen(true)}
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
            <Register/>
          }
        />
        <Route
          path="/signin"
          element={
            <Login/>
          }
        />
        <Route
          path='/movies'
          element={<Movies/>}
        />
        <Route
          path='/profile'
          element={<Profile/>}
        />
        <Route
          path='/saved-movies'
          element={<SavedMovies/>}
        />
      </Routes>
      <Footer/>
      <Navigation
        isOpen={isMenuOpen}
        onClose={closeMenu}/>
    </div>
  );
}

export default App;
