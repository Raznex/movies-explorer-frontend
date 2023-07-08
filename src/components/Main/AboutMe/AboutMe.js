import React from 'react';
import './AboutMe.css'
import avatar from '../../../images/pic__COLOR_pic.png'

const AboutMe = () => {
  return (
    <section className='about'>
      <h2 className="about__title">Студент</h2>
      <div className="about__columns">
        <div className="about__container">
          <div className="about__dev">
          <h3 className="about__name">Виталий</h3>
          <p className="about__age">Фронтенд-разработчик, 30 лет</p>
          <p className="about__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть
            жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
            компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
            ушёл с постоянной работы.</p>
          </div>
          <a href="https://github.com/Raznex" rel="noreferrer" target="_blank" className="about__github">Github</a>
        </div>
        <img src={avatar} alt="Ваш аватар" className="about__photo"/>
      </div>
    </section>
  );
};

export default AboutMe;
