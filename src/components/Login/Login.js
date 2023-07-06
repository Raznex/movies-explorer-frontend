import React from 'react';
import logo from "../../images/header__logo.svg";
import './Login.css'

const Login = () => {
  return (
    <section className="login">
      <img src={logo} alt="" className="login__logo"/>
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
        <button type="submit" className="login__submit">Войти</button>
        <p className="login__question">Ещё не зарегистрированы?
          <a href="/" className="login__login"> Регистрация</a>
        </p>
      </form>
    </section>
  );
};

export default Login;
