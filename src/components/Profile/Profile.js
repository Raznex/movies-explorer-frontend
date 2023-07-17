import React from 'react';
import './Profile.css'
import useForm from "../../utils/useForm";
import {UserContext} from "../../context/UserContext";

const Profile = ({
                   isLoading,
                   onLogout,
                   isEditing,
                   setIsEditing,
                   onEditProfileSubmit,
                   errorMessageProfile,
                   buttonDisabled,
                   setButtonDisabled,
                 }) => {
  const currentUser = React.useContext(UserContext);
  const {formValue, error, handleChange, setData} = useForm();

  function handleLogout(e) {
    e.preventDefault();
    onLogout();
  }

  function handleEditClick() {
    setIsEditing(true);
    setData(currentUser.name, currentUser.email);
  }

  function handleEditProfileSubmit(e) {
    e.preventDefault();
    onEditProfileSubmit(formValue);
  }

  React.useEffect(() => {
    if ((formValue.name === currentUser.name) && (formValue.email === currentUser.email)) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [formValue.name, formValue.email, currentUser.name, currentUser.email])

  function handleControl(e) {
    handleChange(e);
  }

  return (
    <main className="profile">
      <h2 className="profile__hello">Привет, {currentUser.name}</h2>
      <form className="profile__form"
            onSubmit={isEditing ? handleEditProfileSubmit : handleEditClick}
      >
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
            value={isEditing ? formValue.name : currentUser.name}
            disabled={isEditing ? false : true}
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
            value={isEditing ? formValue.email : currentUser.email}
            onChange={handleControl}
            disabled={isEditing ? false : true}
          >
          </input>
        </div>
        <button
          type="submit"
          className={`profile__save ${(isEditing) ? 'profile__save_active' : 'profile__save'} ${(buttonDisabled) ? 'profile__save' : ''}`}
        >
          {isLoading ? "Сохранение..." : "Сохранить"}
        </button>
        <button className="profile__edit"
                onClick={handleEditClick}
        >
          Редактировать
        </button>
        <button className="profile__quit"
                onClick={handleLogout}
        >
          Выйти из аккаунта
        </button>
      </form>
    </main>
  );
};

export default Profile;
