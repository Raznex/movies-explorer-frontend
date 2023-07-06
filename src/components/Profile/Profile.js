import React from 'react';
import './Profile.css'

const Profile = () => {
  return (
    <section className="profile">
      <h2 className="profile__hello">Привет, Виталий!</h2>
      <form className="profile__form">
        <div className="profile__input">
          <label htmlFor="name-field" className="profile__lable">Имя</label>
          <input
            type="text"
            id="name-field"
            className="profile__name"
            minLength="2"
            maxLength="40"
            required
            name="name"
            value={'Виталий'}
            disabled
          >
          </input>
        </div>
        <div className="profile__input">
          <label htmlFor="email-field" className="profile__lable">E-mail</label>
          <input
            type="text"
            id="email-field"
            className="profile__name"
            minLength="2"
            maxLength="40"
            required
            name="email"
            value={'pochta@yandex.ru'}
            disabled
          >
          </input>
        </div>
        <button className="profile__save">Сохранить</button>
        <button className="profile__edit">Редактировать</button>
        <button className="profile__quit">Выйти из аккаунта</button>
      </form>
    </section>
  );
};

export default Profile;
