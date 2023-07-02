import React from 'react';
import './Cards.css'
import poster from '../../../images/movie_pic.png'

const Cards = () => {
  return (
    <article className="card">
      <img src={poster} alt="Постер" className="card__image"/>
      <div className="card__container">
        <div className="card__description">
          <p className="card__name">33 слова о дизайне</p>
          <p className="card__duration">1ч42м</p>
        </div>
        <button className="card__like"></button>
      </div>
    </article>
  );
};

export default Cards;
