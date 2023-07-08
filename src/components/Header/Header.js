import React from 'react';
import './Header.css'
import logo from '../../images/header__logo.svg'
import {Link, Routes, Route, useLocation, Navigate} from 'react-router-dom';

const Header = ({ onOpenMenu }) => {
  let location = useLocation();

  return (
    <header className={`${(location.pathname !== "/" && location.pathname !== "/movies" && location.pathname !== "/saved-movies" && location.pathname !== "/profile") ? "header__hidden" : (location.pathname === "/" ? "header__profile" : "header")}`}>
    <Routes>
        {["/", "/movies", "/saved-movies", "/profile"].map((path) => (
          <Route path={path} element={<Link to="/"><img className="header__image" src={logo} alt="Movies Explorer" /></Link>} />
        ))}
      </Routes>
      <div className="header__nav">
        <button className={`header__button_menu`}
                onClick={onOpenMenu}/>
        <Routes>
          {["/movies", "/saved-movies", "/profile"].map((path) => (
            <Route path={path} element={<>
              <Link to="/movies" className={`header__navlink`}>Фильмы</Link>
              <Link to="/saved-movies" className={`header__navlink`}>Сохранённые фильмы</Link>
              <Link to="/profile" className="header__navlink header__navlink-account">Аккаунт</Link>
            </>} />
          ))}
        </Routes>
      </div>
      {/*<nav className="header__menu">*/}
      {/*  <button href="" className="header__link">Регистрация</button>*/}
      {/*  <button href="" className="header__link header__link_login">Войти</button>*/}
      {/*  </nav>*/}
    </header>
  );
};

export default Header;

