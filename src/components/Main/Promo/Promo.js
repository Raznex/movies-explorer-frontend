import React from 'react';
import logo from '../../../images/landing-logo.svg'
import './Promo.css'

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__description">Учебный проект студента факультета <nobr>Веб-разработки.</nobr></h1>
        <p className="promo__info">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className="promo__more-info">Узнать больше</button>
      </div>
      <img src={logo} alt="" className="promo__image"/>
    </section>
  );
};

export default Promo;
