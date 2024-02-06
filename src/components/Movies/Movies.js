import React from 'react';
import './Movies.css'
import {useLocation} from 'react-router-dom';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import AddMore from "./AddMore/AddMore";
import Preloader from '../Preloader/Preloader'

const Movies = ({
                  handleSearch,
                  movies,
                  onAddMore,
                  isMore,
                  isChecked,
                  setIsChecked,
                  onFilterCheckbox,
                  isLoading,
                  onSaveMovie,
                }) => {
  const location = useLocation();

  return (
    <main>
      <SearchForm
        onSearch={handleSearch}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        onFilterCheckbox={onFilterCheckbox}
      />
      {(isLoading && <Preloader/>) ||
        (location.pathname === "/movies"
          ? (localStorage.nothingFound && <h2 className="movies__notfound">{localStorage.nothingFound}</h2>)
          : (<h2 className="movies__notfound">Ничего не найдено</h2>)) ||
        <MoviesCardList
          movies={movies}
          onSave={onSaveMovie}
        />
      }
      {isMore &&
        <AddMore
          onAddMore={onAddMore}
        />}
    </main>
  );
};

export default Movies;
