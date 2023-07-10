import React from 'react';
import './AddMore.css'

const AddMore = ({ handleShowMore }) => {
  return (
    <section className='more'>
      <button className="more__button" onClick={handleShowMore}>Ещё</button>
    </section>
  );
};

export default AddMore;
