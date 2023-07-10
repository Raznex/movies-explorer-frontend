import React from 'react';
import './Portfolio.css'
import arrow from '../../../images/link-arrow.svg'

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h2 className="portfolio__title">Портфолио</h2>
      <nav>
        <ul className="portfolio__list">
          <li className="portfolio__button">
            <a href="https://raznex.github.io/how-to-learn/" rel="noreferrer" target="_blank" className="portfolio__link">Статичный сайт
            </a>
            <img src={arrow} alt="" className="portfolio__arrow"/>
          </li>
          <li className="portfolio__button">
            <a href="https://raznex.github.io/russian-travel/" rel="noreferrer" target="_blank" className="portfolio__link">Адаптивный сайт
            </a>
            <img src={arrow} alt="" className="portfolio__arrow"/>
          </li>
          <li className="portfolio__button">
            <a href="https://raznex.github.io/react-mesto-auth" rel="noreferrer" target="_blank" className="portfolio__link">Одностраничное приложение
            </a>
            <img src={arrow} alt="" className="portfolio__arrow"/>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Portfolio;
