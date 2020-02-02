import React, { Component } from 'react';

class HeaderHeading extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { color, pathname, texts, targetRoute, targetRoute2 } = this.props;
    let checkClassName = '';

    if (pathname == targetRoute || pathname == targetRoute2) {
      checkClassName = `header__wrapper__${color} active`;
    } else {
      checkClassName = `header__wrapper__${color}`;
    }

    return (
      <div className={checkClassName}>
        <h1 className='heading__h1'>
          Hello, I'm <span className='heading__color'>Eero Suvanto</span>.
        </h1>

        <div className='header__titles'>
          <span>{texts[0]}&nbsp;</span>
          <div className='header__titles__cont'>
            <div className='rollTitles'>
              <span className='header__title'>{texts[1]}</span>
              <span className='header__title'>{texts[2]}</span>
              <span className='header__title'>{texts[3]}</span>
              <span className='header__title'>{texts[1]}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderHeading;
