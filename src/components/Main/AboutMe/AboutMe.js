import React from 'react';
import './AboutMe.css'
import avatar from '../../../images/IMG_2340.jpg'

const AboutMe = () => {
  return (
    <section id="about-me" className='about'>
      <h2 className="about__title">Студент</h2>
      <div className="about__columns">
        <div className="about__container">
          <div className="about__dev">
          <h3 className="about__name">Андрей</h3>
          <p className="about__age">Фронтенд-разработчик, 23 года</p>
          <p className="about__description">Я&nbsp;родился и&nbsp;живу в&nbsp;Санкт-Петербурге.
            Начал свое обучение в&nbsp;сентябре 2022 года и&nbsp;то, что вы&nbsp;сейчас читаете&nbsp;&mdash; моя дипломная работа.
            Пока что это все что есть, но&nbsp;дальше&nbsp;&mdash; больше!
            </p>
          </div>
          <a href="https://github.com/Raznex" rel="noreferrer" target="_blank" className="about__github">Github</a>
        </div>
        <img src={avatar} alt="Ваш аватар" className="about__photo"/>
      </div>
    </section>
  );
};

export default AboutMe;
