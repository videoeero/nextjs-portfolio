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
                ? 'header__wrapper__red active'
                : 'header__wrapper__red'
            }
          >
            <h1 className='heading__h1'>
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
            <h1 className='heading__h1'>
              Hello, I'm <span className='heading__color'>Eero Suvanto</span>.
            </h1>

            <div className='header__titles'>
              <span>Here's some of my&nbsp;</span>
              <div className='header__titles__cont rollTitles'>
                <span className='header__title'>skills</span>
                <span className='header__title'>perks</span>
                <span className='header__title'>stats</span>
                <span className='header__title'>skills</span>
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
            <h1 className='heading__h1'>
              Hello, I'm <span className='heading__color'>Eero Suvanto</span>.
            </h1>

            <div className='header__titles'>
              <span>Here's some of my&nbsp;</span>
              <div className='header__titles__cont rollTitles'>
                <span className='header__title'>chosen work</span>
                <span className='header__title'>fun projects</span>
                <span className='header__title'>designs</span>
                <span className='header__title'>chosen work</span>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default withRouter(Header);
