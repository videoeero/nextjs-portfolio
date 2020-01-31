import React, { Component } from 'react';
import HeaderGradient from '../HeaderGradient';

class Header extends Component {
  render() {
    return (
      <>
        <HeaderGradient className='header'>
          <div className='header__wrapper'>
            <h1 className='heading heading__h1'>
              Hello, I'm <span className='heading__color'>Eero Suvanto</span>.
            </h1>

            <div className='header__titles'>
              <span>I'm a&nbsp;</span>
              <div className='header__titles__cont rollTitles'>
                <span className='header__title'>web developer</span>
                <span className='header__title'>web designer</span>
                <span className='header__title'>teacher</span>
                <span className='header__title'>web developer</span>
              </div>
            </div>
          </div>
        </HeaderGradient>
      </>
    );
  }
}

export default Header;
