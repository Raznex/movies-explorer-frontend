import React from 'react';
import './MoviesCardList.css'
import Cards from "../Cards/Cards";
// import AddMore from "../AddMore/AddMore";

const MoviesCardList = ({ movies, onSave }) => {
  return (
    <>
      <section className="movies">
        {movies?.map((movie) => {
          return (
            <Cards
              key={movie.id}
              movie={movie}
              onSave={onSave}
            />
          );
        })}
      </section>
    </>
  );
};

export default MoviesCardList;
