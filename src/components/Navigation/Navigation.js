import React from 'react';
import './Navigation.css'
import {Link, Route, Routes, useLocation} from "react-router-dom";

const Navigation = ({ isOpen, onClose }) => {
  let location = useLocation();

  return (
    <section className={`navigation ${isOpen && 'navigation__open'}`}>
      <div className="navigation__container">
        <button className="navigation__button_close"
        onClick={onClose}/>
        <nav className="navigation__menu">
        <Routes>
          {["/movies", "/saved-movies", "/profile"].map((path) => (
            <Route key={path} path={path} element={<>
              <Link to="/" className={`navigation__navlink ${(location.pathname === "/") ? "navigation__navlink_active" : ""}`} onClick={onClose}>Главная</Link>
              <Link to="/movies" className={`navigation__navlink ${(location.pathname === "/movies") ? "navigation__navlink_active" : ""}`} onClick={onClose}>Фильмы</Link>
              <Link to="/saved-movies" className={`navigation__navlink ${(location.pathname === "/saved-movies") ? "navigation__navlink_active" : ""}`} onClick={onClose}>Сохранённые фильмы</Link>
              <Link to="/profile" className={`navigation__account`} onClick={onClose}>Аккаунт</Link>
            </>} />
          ))}
        </Routes>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
