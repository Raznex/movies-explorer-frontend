import React from 'react';
import './Techs.css'

const Techs = () => {
  return (
    <section className='techs'>
      <h2 className="techs__name">Технологии</h2>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__description">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили
        в&nbsp;дипломном проекте.</p>
      <ul className="techs__group">
        <li className="techs__technology">HTML</li>
        <li className="techs__technology">CSS</li>
        <li className="techs__technology">JS</li>
        <li className="techs__technology">React</li>
        <li className="techs__technology">Git</li>
        <li className="techs__technology">Express.js</li>
        <li className="techs__technology">mongoDB</li>
      </ul>
    </section>
  );
};

export default Techs;
