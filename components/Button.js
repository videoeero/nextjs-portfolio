import React from 'react';

function ButtonGradient({ title }) {
  return (
    <>
      <div className='button__bg__red'>{title}</div>
      <div className='button__bg__blue'>{title}</div>
      <p className='button__title'>{title}</p>
    </>
  );
}

export default ButtonGradient;
