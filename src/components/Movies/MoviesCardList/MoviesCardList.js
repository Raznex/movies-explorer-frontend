import React from 'react';
import './MoviesCardList.css'
import Cards from "../Cards/Cards";
// import AddMore from "../AddMore/AddMore";

const MoviesCardList = ({ movies, onSave, onDeleteMovie }) => {
  return (
    <>
      <section className="movies">
        {movies?.map((movie) => {
          return (
            <Cards
              key={movie.id}
              movie={movie}
              onSave={onSave}
              onDeleteMovie={onDeleteMovie}
            />
          );
        })}
      </section>
    </>
  );
};

export default MoviesCardList;
