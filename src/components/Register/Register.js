import React from 'react';
import './Register.css'
import logo from '../../images/header__logo.svg'
import {Link, Route, Routes} from "react-router-dom";
import useForm from "../../utils/useForm";

const Register = ({handleRegister, errorMessage, setErrorMessage, isAuthLoading}) => {

  const {formValue, error, resetValidation, handleChange, isValid} = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(formValue);
    console.log(1)
  }

  function handleResetAll() {
    resetValidation();
    setErrorMessage('');
  }

  return (
    <main className="register">
      <Routes>
        <Route path="/"
               element={<Link
                 id='signInImg'
                 to="/"
                 onClick={handleResetAll}>
                 <img src={logo} alt="Логотип" className="register__logo"/>
               </Link>}
        />
      </Routes>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form"
            onSubmit={handleSubmit}
      >
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
              name="name"
              value={formValue.name || ''}
              onChange={handleChange}
            />
            <span className="name-field-error register__span">{error.name || ''}</span>
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
              name="email"
              value={formValue.email || ''}
              onChange={handleChange}
            />
            <span className="email-field-error register__span">{error.email || ''}</span>
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
              name="password"
              value={formValue.password || ''}
              onChange={handleChange}
            />
            <span className="password-field-error register__span">{error.password || ''}</span>
          </div>
        </div>
        <p className="register__error">{errorMessage}</p>
            <button
              type="submit"
              className={`register__submit ${(isValid) ? '' : 'register__submit_disabled'}`}
              name="submit"
              disabled={!isValid}
              defaultValue="Зарегистрироваться"
            >
              {isAuthLoading ? "Регистрация..." : "Зарегистрироваться"}
            </button>
            <p className="register__question">Уже зарегистрированы?
              <Link to="/signin" className="register__login" onClick={handleResetAll}> Войти</Link>
            </p>
      </form>
    </main>
  );
};

export default Register;
