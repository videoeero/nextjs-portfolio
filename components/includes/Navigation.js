import React, { Component } from 'react';
// import Link from 'next/link';
import Link from '../ActiveLink';

class Navigation extends Component {
  render() {
    return (
      <>
        <nav className='nav'>
          <div className='nav__list'>
            <Link activeClassName='active' href='/'>
              <a className='nav__list__item'>Who am I?</a>
            </Link>
            <Link activeClassName='active' href='/skills'>
              <a className='nav__list__item'>Skills & Experience</a>
            </Link>
            <Link activeClassName='active' href='/portfolio'>
              <a className='nav__list__item'>Portfolio</a>
            </Link>
            <Link activeClassName='active' href='/contact'>
              <a className='nav__list__item'>Contact</a>
            </Link>
          </div>
        </nav>
      </>
    );
  }
}

export default Navigation;
