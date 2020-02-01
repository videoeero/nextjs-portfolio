import React, { Component } from 'react';
// import HeaderGradient from '../HeaderGradient';
import { withRouter } from 'next/router';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pathname } = this.props.router;

    return (
      <>
        <header className='header'>
          <div
            className={
              pathname == '/' || pathname == '/contact'
                ? 'header__wrapper__plum active'
                : 'header__wrapper__plum'
            }
          >
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
          <div
            className={
              pathname == '/skills'
                ? 'header__wrapper__blue active'
                : 'header__wrapper__blue'
            }
          >
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
          <div
            className={
              pathname == '/portfolio'
                ? 'header__wrapper__green active'
                : 'header__wrapper__green'
            }
          >
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
        </header>
      </>
    );
  }
}

export default withRouter(Header);
