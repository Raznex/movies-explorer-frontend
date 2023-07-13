import React from 'react';
import './AddMore.css'

const AddMore = ({ onAddMore }) => {
  return (
    <section className='more'>
      <button className="more__button" onClick={onAddMore}>Ещё</button>
    </section>
  );
};

export default AddMore;
