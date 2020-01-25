import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__list__item'>
            <Link href='/#landing'>
              <a>Eero</a>
            </Link>
          </li>
          <li className='nav__list__item'>
            <Link href='/#about'>
              <a>About me</a>
            </Link>
          </li>
          <li className='nav__list__item'>
            <Link href='/#skills'>
              <a>Skills & Experience</a>
            </Link>
          </li>
          <li className='nav__list__item'>
            <Link href='/#portfolio'>
              <a>Portfolio</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
