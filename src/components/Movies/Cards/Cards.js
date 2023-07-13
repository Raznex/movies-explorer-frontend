import React from 'react';
import './Cards.css'
import { useLocation } from 'react-router-dom';

const Cards = ({movie, onSave}) => {
  const location = useLocation();
  const hours = Math.floor(movie.duration/60);
  const min = movie.duration-(hours*60);

  function handleSaveMovie(e) {
    e.preventDefault();
    onSave(movie);
  }

  return (
    <article className="card">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
      <img src={`https://api.nomoreparties.co/${movie.image.url}`} alt="Постер" className="card__image"/>
      </a>
      <div className="card__container">
        <div className="card__description">
          <p className="card__name">{movie.nameRU}</p>
          <p className="card__duration">{hours ? `${hours}ч` : ''} {min ? `${min}м` : ''}</p>
        </div>
        <button id="buttonLike" className={`${(location.pathname === "/movies") ? "card__like" : "card__like_hidden"}`}
                onClick={handleSaveMovie}>
        </button>
        <button id="buttonTrash" className={`${(location.pathname === "/saved-movies") ? "card__like_saved" : "card__like_hidden"}`}
                onClick={handleSaveMovie}>
        </button>
      </div>
    </article>
  );
};

export default Cards;
