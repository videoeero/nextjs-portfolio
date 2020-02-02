import React, { Component } from 'react';
import HeaderHeading from '../HeaderHeading';
import { withRouter } from 'next/router';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pathname } = this.props.router;
    const indexText = ["I'm a", 'web developer', 'web designer', 'teacher'];
    const skillsText = ["Here's some of my", 'skills', 'perks', 'stats'];
    const portfolioText = [
      "Here's some of my",
      'chosen work',
      'fun projects',
      'designs'
    ];

    return (
      <>
        <header className='header'>
          <HeaderHeading
            color={'red'}
            pathname={pathname}
            texts={indexText}
            targetRoute={'/'}
            targetRoute2={'/about'}
          />
          <HeaderHeading
            color={'blue'}
            pathname={pathname}
            texts={skillsText}
            targetRoute={'/skills'}
          />
          <HeaderHeading
            color={'green'}
            pathname={pathname}
            texts={portfolioText}
            targetRoute={'/portfolio'}
          />
        </header>
      </>
    );
  }
}

export default withRouter(Header);
