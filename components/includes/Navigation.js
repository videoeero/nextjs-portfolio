import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <>
      <nav className='nav'>
        <div className='nav__list'>
          <Link href='/#landing'>
            <a className='nav__list__item'>Home</a>
          </Link>
          <Link href='/#about'>
            <a className='nav__list__item'>About me</a>
          </Link>
          <Link href='/#skills'>
            <a className='nav__list__item'>Skills & Experience</a>
          </Link>
          <Link href='/#portfolio'>
            <a className='nav__list__item'>Portfolio</a>
          </Link>
          <Link href='/#contact'>
            <a className='nav__list__item'>Contact</a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
