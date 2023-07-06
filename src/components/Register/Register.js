import React from 'react';
import './Register.css'
import logo from '../../images/header__logo.svg'

const Register = () => {
  return (
    <section className="register">
      <img src={logo} alt="" className="register__logo"/>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form">
        <div className="register__inputs">
        <div className="register__input">
          <label htmlFor="name-register" className="register__label">Имя</label>
          <input
            type="text"
            id="name-register"
            className="register__name"
            minLength="2"
            maxLength="40"
            required
            name="nameRegister"
            value={'Виталий'}>
          </input>
        </div>
        <div className="register__input">
          <label htmlFor="name-register" className="register__label">E-mail</label>
          <input
            type="email"
            id="email-register"
            className="register__name"
            minLength="2"
            maxLength="40"
            required
            name="emailRegister"
            value={'pochta@yandex.ru'}>
          </input>
        </div>
        <div className="register__input">
          <label htmlFor="name-register" className="register__label">Пароль</label>
          <input
            type="password"
            id="password-register"
            className="register__name"
            minLength="2"
            maxLength="40"
            required
            name="passRegister"
            value={'12345'}>
          </input>
        </div>
        </div>
        <button type="submit" className="register__submit">Зарегестрироваться</button>
        <p className="register__question">Уже зарегистрированы?
          <a href="/" className="register__login"> Войти</a>
        </p>
      </form>
    </section>
  );
};

export default Register;
