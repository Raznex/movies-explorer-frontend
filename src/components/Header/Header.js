import React from 'react';
import './Header.css'
import logo from '../../images/header__logo.svg'
import { Link, Routes, Route, useLocation } from 'react-router-dom';

const Header = ({ onOpenMenu, loggedIn }) => {
  const location = useLocation();
  const loggedInCheck = () => {
    if (!loggedIn) {
      return (
        <Routes>
          <Route path="/" element={
            <div>
              <Link to="/signup" id='registerLink' className={`header__link`}>Регистрация</Link>
              <Link to="/signin" id='loginLink' className={`header__link header__link_login`}>Войти</Link>
            </div>
          } />
        </Routes>
      );
    } else {
      return (
        <Routes>
          {["/movies", "/saved-movies", "/profile"].map((path) => (
            <Route key={path} path={path} element={
              <>
                <Link to="/movies" id='moviesLink' className={`header__navlink`}>Фильмы</Link>
                <Link to="/saved-movies" id='savedMoviesLink' className={`header__navlink`}>Сохранённые фильмы</Link>
                <Link to="/profile" id='profileLink' className="header__navlink header__navlink-account">Аккаунт</Link>
              </>
            } />
          ))}
        </Routes>
      );
    }
  }

  return (
    <header className={`${(location.pathname !== "/" && location.pathname !== "/movies" && location.pathname !== "/saved-movies" && location.pathname !== "/profile") ? "header__hidden" : (location.pathname === "/" ? "header__profile" : "header")}`}>
    <Routes>
        {["/", "/movies", "/saved-movies", "/profile"].map((path) => (
          <Route key={path} path={path} element={<Link id='profileImg' to="/"><img className="header__image" src={logo} alt="Movies Explorer" /></Link>} />
        ))}
      </Routes>
      <div className="header__nav">
        <button className={`${(location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile") ? "header__button_menu" : "header__button_hidden"}`}
                onClick={onOpenMenu}/>
        <Routes>
          {["/movies", "/saved-movies", "/profile"].map((path) => (
            <Route key={path} path={path} element={<>
              <Link to="/movies" id='moviesLink' className={`header__navlink`}>Фильмы</Link>
              <Link to="/saved-movies" id='savedMoviesLink' className={`header__navlink`}>Сохранённые фильмы</Link>
              <Link to="/profile"  id='profileLink' className="header__navlink header__navlink-account">Аккаунт</Link>
            </>} />
          ))}
        </Routes>
      </div>
      {!loggedIn ? (
        <Routes>
          <Route path="/" element={
            <div>
              <Link to="/signup" id='registerLink' className={`header__link`}>Регистрация</Link>
              <Link to="/signin" id='loginLink' className={`header__link header__link_login`}>Войти</Link>
            </div>
          } />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={
              <nav className="header__nav">
                <Link to="/movies" id='moviesLink' className={`header__navlink header__navlink_default`}>Фильмы</Link>
                <Link to="/saved-movies" id='savedMoviesLink' className={`header__navlink header__navlink_default`}>Сохранённые фильмы</Link>
                <Link to="/profile" id='profileLink' className="header__navlink header__navlink-account">Аккаунт</Link>
              </nav>
            } />
        </Routes>
      )}
    </header>
  );
};

export default Header;

