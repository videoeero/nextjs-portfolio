import React, { Component } from 'react';
import Link from 'next/link';

class Navigation extends Component {
  render() {
    return (
      <>
        <nav className='nav'>
          <div className='nav__list'>
            <Link href='/'>
              <a className='nav__list__item'>Who am I?</a>
            </Link>
            <Link href='/skills'>
              <a className='nav__list__item'>Skills & Experience</a>
            </Link>
            <Link href='/portfolio'>
              <a className='nav__list__item'>Portfolio</a>
            </Link>
            <Link href='/contact'>
              <a className='nav__list__item'>Contact</a>
            </Link>
          </div>
        </nav>
      </>
    );
  }
}

export default Navigation;
