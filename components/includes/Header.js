import React, { Component } from 'react';
import HeaderHeading from '../HeaderHeading';
import { withRouter } from 'next/router';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgImage: [
        'none',
        'none',
        'linear-gradient(to right,#0b0b16,#2d3142,#0b0b16)'
      ]
    };
  }

  componentDidMount() {
    const { pathname } = this.props.router;
    let bgState = '';
    if (pathname == '/') {
      bgState = [
        'none',
        'none',
        'linear-gradient(to right,#0b0b16,#2d3142,#0b0b16)'
      ];
    } else if (pathname == '/skills') {
      bgState = [
        'none',
        'linear-gradient(to right,#0b0b16,#2d3142,#0b0b16)',
        'none'
      ];
    } else if (pathname == '/portfolio') {
      bgState = [
        'linear-gradient(to right,#0b0b16,#2d3142,#0b0b16)',
        'none',
        'none'
      ];
    }
    this.setBackground(bgState);
  }

  setBackground(bgState) {
    this.setState(state => ({
      bgImage: bgState
    }));
  }

  render() {
    const { pathname } = this.props.router;
    const { bgImage } = this.state;
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
            color={'green'}
            pathname={pathname}
            texts={portfolioText}
            targetRoute={'/portfolio'}
            bgImage={bgImage[0]}
          />
          <HeaderHeading
            color={'blue'}
            pathname={pathname}
            texts={skillsText}
            targetRoute={'/skills'}
            bgImage={bgImage[1]}
          />
          <HeaderHeading
            color={'red'}
            pathname={pathname}
            texts={indexText}
            targetRoute={'/'}
            bgImage={bgImage[2]}
          />
        </header>
      </>
    );
  }
}

export default withRouter(Header);
