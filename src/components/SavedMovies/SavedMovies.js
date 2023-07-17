import React from 'react';
import './SavedMovies.css'
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import AddMore from "../Movies/AddMore/AddMore";
import {useLocation} from "react-router-dom";

const SavedMovies = ({ isLoading,
                       savedMovies,
                       onFilterCheckbox,
                       isChecked,
                       setIsChecked,
                       onMovieSearch,
                       onDeleteMovie,
                       isMore,
                       onAddMore }) => {

  const location = useLocation();

  return (
    <main className="saved">
      <SearchForm
        onMovieSearch={onMovieSearch}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        onFilterCheckbox={onFilterCheckbox}
      />
      {(isLoading && <Preloader/>) ||
        (location.pathname === "/movies"
          ? (localStorage.nothingFound && <h2 className="movies__notfound">{localStorage.nothingFound}</h2>)
          : (<h2 className="movies__notfound">Ничего не найдено</h2>)) ||
        <MoviesCardList
          movies={savedMovies}
          onDelete={onDeleteMovie}
        />
      }
      {isMore &&
        <AddMore
          onAddMore={onAddMore}
        />}
    </main>
  );
};

export default SavedMovies;
