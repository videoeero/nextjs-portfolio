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

  // checkUrl(url) {
  //   const hash = url.split('#')[1];

  //   setTimeout(function() {
  //     const anchor = document.getElementsByName(hash);

  //     console.log('juu!!!');
  //     const offSet = anchor[0].offsetTop - 20;
  //     window.scrollTo(0, offSet);
  //   }, 400);
  // }

  render() {
    let { pathname } = this.props.router;
    const nonActiveRoute = 'nav__list__item';
    const activeRoute = 'nav__list__item active';

    return (
      <>
        <nav className='nav'>
          <div className='nav__list'>
            <LinkWithHash href='/#whoami'>
              <a
                className={pathname == '/' ? activeRoute : nonActiveRoute}
                onClick={() => this.handleClick('#whoami', pathname)}
              >
                Who am I?
              </a>
            </LinkWithHash>

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
