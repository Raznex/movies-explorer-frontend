import React from 'react';
import './SearchForm.css';
import loupe from '../../../images/search__icon.svg'
import useForm from "../../../utils/useForm";
import FilterCheckbox from "../FilterCheckbox/FolterCheckbox";
import { useLocation } from 'react-router-dom';

const SearchForm = ({ onSearch, isChecked, setIsChecked, onFilterCheckbox }) => {
  const location = useLocation();
  const {formValue, handleChange, setInput} = useForm();

  React.useEffect(() => {
    if (location.pathname === "/movies") {
      setInput(localStorage.input);
    } else {
      setInput('');
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch({
      input: formValue.movie,
    });
  }

  return (
    <section className='search'>
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__searcher">
          <img className="search__loupe" src={loupe} alt="loupe"/>
          <input
            type="text"
            name="movie"
            placeholder="Фильм"
            value={formValue.movie || ""}
            onChange={handleChange}
            minLength="1"
            className="search__input" required>
          </input>
          <button className="search__submit"></button>
        </div>
        <div className="search__shorts">
          <FilterCheckbox
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            onFilterCheckbox={onFilterCheckbox}
          />
          <h2 className="search__text">Короткометражки</h2>
        </div>
      </form>
      <div className="search-line"></div>
    </section>
  );
};

export default SearchForm;
