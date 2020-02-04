import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
// import Link from '../ActiveLink';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { pathname } = this.props.router;
    console.log(pathname);
    const nonActiveRoute = 'nav__list__item';
    const activeRoute = 'nav__list__item active';

    return (
      <>
        <nav className='nav'>
          <div className='nav__list'>
            <Link href='/'>
              <a className={pathname == '/' ? activeRoute : nonActiveRoute}>
                Who am I?
              </a>
            </Link>
            <Link href='/skills'>
              <a
                className={pathname == '/skills' ? activeRoute : nonActiveRoute}
              >
                Skills & Experience
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

            <a href='/#contact' className={nonActiveRoute}>
              Contact
            </a>
          </div>
        </nav>
      </>
    );
  }
}

export default withRouter(Navigation);
