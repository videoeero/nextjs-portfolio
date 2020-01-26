import React from 'react';
import Link from 'next/link';

const Education = () => {
  return (
    <>
      <section id='#education' className='education'>
        <h2 className='heading heading__h2'>Education</h2>
        <p className='paragraph paragraph__strong'>
          Proudly from from University of Turku, Finland
        </p>
        <ul className='education__list'>
          <li className='education__list__item'>
            <span>2017:</span>MScs in Computer Science, didactic information
            technology as major
          </li>
          <li className='education__list__item'>
            <span>2014:</span>Teacher's Pedagogical Studies
          </li>
        </ul>
      </section>
    </>
  );
};

export default Education;
