import React from 'react';
import './SavedMovies.css'
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

const SavedMovies = () => {
  return (
    <section className="saved">
      <SearchForm/>
      <MoviesCardList/>
    </section>
  );
};

export default SavedMovies;
