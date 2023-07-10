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
              <img src={arrow} alt="" className="portfolio__arrow"/>
            </a>
          </li>
          <li className="portfolio__button">
            <a href="https://raznex.github.io/russian-travel/" rel="noreferrer" target="_blank" className="portfolio__link">Адаптивный сайт
              <img src={arrow} alt="" className="portfolio__arrow"/>
            </a>
          </li>
          <li className="portfolio__button">
            <a href="https://raznex.github.io/react-mesto-auth" rel="noreferrer" target="_blank" className="portfolio__link">Одностраничное приложение
              <img src={arrow} alt="" className="portfolio__arrow"/>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Portfolio;
