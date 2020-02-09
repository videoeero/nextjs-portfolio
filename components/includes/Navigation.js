import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import LinkWithHash from '../LinkWithHash';
import checkUrl from '../checkUrl';

// import Link from '../ActiveLink';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(url, pathname) {
    checkUrl(url, pathname);
  }

  render() {
    let { pathname } = this.props.router;
    const nonActiveRoute = 'nav__list__item';
    const activeRoute = 'nav__list__item active';

    return (
      <>
        <nav className='nav'>
          <Link href='/'>
            <a className='nav__icon' title='Home'>
              <svg
                className='nav__icon__svg'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 289 289'
              >
                <title>Home</title>
                <desc>Click here to go to the landing page</desc>
                <circle
                  cx='144.5'
                  cy='144.5'
                  r='141'
                  fill='none'
                  stroke='#e9e7ee'
                  strokeWidth='7'
                  strokeMiterlimit='10'
                ></circle>
                <path
                  d='M73.5 47.1h140.3v55.4h-26.5V69.4h-69.9V132h58.8v22.2h-58.8v66.4h69.9v-33.1h26.5v55.3H73.5v-22.2h18.6V69.4H73.5V47.1z'
                  fill='#e9e7ee'
                />
              </svg>
            </a>
          </Link>
          <div className='nav__list'>
            <Link href='/'>
              <a
                className={
                  pathname == '/' ? `${activeRoute}` : `${nonActiveRoute}`
                }
              >
                Home
              </a>
            </Link>
            <LinkWithHash href='/#whoami'>
              <a
                className='nav__list__item desktop'
                onClick={() => this.handleClick('#whoami', pathname)}
              >
                Who am I?
              </a>
            </LinkWithHash>
            <LinkWithHash href='/#whoami'>
              <a
                className='nav__list__item mobile'
                onClick={() => this.handleClick('#whoami', pathname)}
              >
                Who?
              </a>
            </LinkWithHash>

            <Link href='/skills'>
              <a
                className={
                  pathname == '/skills'
                    ? `${activeRoute} desktop`
                    : `${nonActiveRoute} desktop`
                }
              >
                Skills & Experience
              </a>
            </Link>
            <Link href='/skills'>
              <a
                className={
                  pathname == '/skills'
                    ? `${activeRoute} mobile`
                    : `${nonActiveRoute} mobile`
                }
              >
                Skills
              </a>
            </Link>
            <Link href='/portfolio'>
              <a
                className={
                  pathname == '/portfolio' ? activeRoute : nonActiveRoute
                }
              >
                Portfolio
              </a>
            </Link>
            <LinkWithHash href='/#contact'>
              <a
                className={nonActiveRoute}
                onClick={() => this.handleClick('#contact', pathname)}
              >
                Contact
              </a>
            </LinkWithHash>

            {/* <LinkWithHash
              as={'/'}
              href={'/#contact'}
              classname={nonActiveRoute}
              content={'Contact'}
            /> */}
          </div>
        </nav>
      </>
    );
  }
}

export default withRouter(Navigation);
