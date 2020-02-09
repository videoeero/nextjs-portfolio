import React, { Component } from 'react';

class HeaderHeading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { color, pathname, texts, targetRoute, bgImage } = this.props;

    let HeadingClassName = '';

    if (pathname == targetRoute) {
      HeadingClassName = `header__wrapper__${color} active`;
    } else {
      HeadingClassName = `header__wrapper__${color} hidden`;
    }

    return (
      <div className={bgImage == 'none' ? 'header__bg' : 'header__bg current'}>
        <style jsx>{`
          .header__bg {
            background-image: ${bgImage};
          }
        `}</style>
        {/* <div className={`header__wrapper__${color}`}> */}
        <div className={HeadingClassName}>
          {/* <style jsx>{`
            .header__wrapper__${color}.hidden {
              display: ${displayHeader};
            }
          `}</style> */}
          <h1 className='heading__h1'>
            Hello, I'm
            <span>
              <span className='heading__color'>Eero Suvanto</span>.
            </span>
          </h1>

          <div className='header__titles'>
            <span>{texts[0]}</span>
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
      </div>
    );
  }
}

export default HeaderHeading;
