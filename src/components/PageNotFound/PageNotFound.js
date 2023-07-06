import React from 'react';
import './PageNotFound.css'

const PageNotFound = () => {
  return (
    <div className="error">
      <p className="error__number">404</p>
      <p className="error__message">Страница не найдена</p>
      <a href="/" className="error__back">Назад</a>
    </div>
  );
};

export default PageNotFound;
