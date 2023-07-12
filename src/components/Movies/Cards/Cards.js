import React from 'react';
import './Cards.css'
import poster from '../../../images/movie_pic.png'
import { useLocation } from 'react-router-dom';

const Cards = () => {
  let location = useLocation();

  return (
    <article className="card">
      <img src={poster} alt="Постер" className="card__image"/>
      <div className="card__container">
        <div className="card__description">
          <p className="card__name">33 слова о дизайне</p>
          <p className="card__duration">1ч42м</p>
        </div>
        <button className={`${(location.pathname === "/movies") ? "card__like" : "card__like_saved"}`}></button>
      </div>
    </article>
  );
};

export default Cards;
