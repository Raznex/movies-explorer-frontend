import React from 'react';
import './Header.css'
import logo from '../../images/header__logo.svg'
// import { Link, Routes, Route } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt="Лого" className="header__image"/>
      <div className="header__container">
        <button href="" className="header__link">Регистрация</button>
        <button href="" className="header__link header__link_login">Войти</button>
        {/*<Routes>*/}
        {/*  <Route path="/"  element={<Link onClick={onLogout} to="/signin" className="header__link">Выйти</Link>} />*/}
        {/*  <Route path="/react-mesto-auth"  element={<Link onClick={onLogout} to="/signin" className="header__link">Выйти</Link>} />*/}
        {/*  <Route path="" element={<Link to="/signup" className="header__register">Регистрация</Link>} />*/}
        {/*  <Route path="" element={<Link to="/signin" className="header__login">Войти</Link>} />*/}
        {/*</Routes>*/}
      </div>
    </header>
  );
};

export default Header;
