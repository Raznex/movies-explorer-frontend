import React from "react";
import './FilterCheckbox.css';

const FilterCheckbox = ({ isChecked, setIsChecked, onFilterCheckbox }) =>  {

  function handleChange (e) {
    setIsChecked(e.target.checked);
    onFilterCheckbox(e.target.checked);
  };

  return (
    <label className="checkbox">
      <input
        type="checkbox"
        className="checkbox__input"
        checked={isChecked}
        onChange={handleChange}>
      </input>
      <span className="checkbox__switch"></span>
    </label>
  );
}

export default FilterCheckbox;
