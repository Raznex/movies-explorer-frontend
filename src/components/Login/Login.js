import React from 'react';
import logo from "../../images/header__logo.svg";
import './Login.css'
import {Link, Route, Routes} from "react-router-dom";

const Login = () => {
  return (
    <main className="login">
      <Routes>
          <Route path="/" element={<Link id='signInImg' to="/"><img src={logo} alt="Логотип" className="login__logo"/></Link>} />
      </Routes>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form">
        <div className="login__inputs">
          <div className="login__input">
            <label htmlFor="name-login" className="login__label">E-mail</label>
            <input
              type="email"
              id="email-login"
              className="login__name"
              minLength="2"
              maxLength="40"
              required
              name="emaillogin"
              value={'pochta@yandex.ru'}>
            </input>
          </div>
          <div className="login__input">
            <label htmlFor="name-login" className="login__label">Пароль</label>
            <input
              type="password"
              id="password-login"
              className="login__name"
              minLength="2"
              maxLength="40"
              required
              name="passlogin"
              value={'12345'}>
            </input>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<>
            <Link to="/" className="login__submit">Войти</Link>
            <p className="login__question">Ещё не зарегистрированы?
              <Link to="/signup" className="login__login"> Регистрация</Link>
            </p>
          </>
          }/>
        </Routes>
      </form>
    </main>
  );
};

export default Login;
