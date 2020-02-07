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
          <div className='nav__list'>
            <LinkWithHash href='/#whoami'>
              <a
                className={
                  pathname == '/'
                    ? `${activeRoute} desktop`
                    : `${nonActiveRoute} desktop`
                }
                onClick={() => this.handleClick('#whoami', pathname)}
              >
                Who am I?
              </a>
            </LinkWithHash>
            <LinkWithHash href='/#whoami'>
              <a
                className={
                  pathname == '/'
                    ? `${activeRoute} mobile`
                    : `${nonActiveRoute} mobile`
                }
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
