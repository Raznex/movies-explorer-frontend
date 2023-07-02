import React from 'react';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import AddMore from "./AddMore/AddMore";

const Movies = () => {
  return (
    <>
      <SearchForm/>
      <MoviesCardList/>
      <AddMore/>
    </>
  );
};

export default Movies;
