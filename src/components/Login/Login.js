import React from 'react';
import logo from "../../images/header__logo.svg";
import './Login.css'
import { Link } from "react-router-dom";
import useForm from "../../utils/useForm";

const Login = ({handleLogin, errorMessage, setErrorMessage, isAuthLoading}) => {

  const {formValue, error, handleChange, resetValidation, isValid} = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(formValue);
  }

  function handleResetAll() {
    resetValidation();
    setErrorMessage('');
  }

  return (
    <main className="login">
      <Link id='signInImg'
            to="/"
            onClick={handleResetAll}
      >
        <img src={logo} alt="Логотип" className="login__logo"/>
      </Link>
      <h2 className="login__title">Рады видеть!</h2>
      <form
        className="login__form"
        onSubmit={handleSubmit}
      >
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
              name="email"
              value={formValue.email || ''}
              onChange={handleChange}
            />
            <span className="name-field-error login__span">{error.email || ''}</span>
          </div>
          <div className="login__input">
            <label htmlFor="name-login" className="login__label">Пароль</label>
            <input
              type="password"
              id="password-login"
              className="login__name"
              minLength="8"
              maxLength="40"
              required
              name="password"
              value={formValue.password || ''}
              onChange={handleChange}
            />
            <span className="profession-field-error login__span">{error.password || ''}</span>
          </div>
        </div>
        <p className="login__error">{errorMessage}</p>
        <button
          type="submit"
          className={`login__submit ${(isValid) ? '' : 'login__submit_disabled'}`}
          name="submit"
          defaultValue="Войти"
          disabled={!isValid}
        >
          {isAuthLoading ? "Вход..." : "Войти"}
        </button>
            <p className="login__question">Ещё не зарегистрированы?
              <Link to="/signup" className="login__login"> Регистрация</Link>
            </p>
      </form>
    </main>
  );
};

export default Login;
