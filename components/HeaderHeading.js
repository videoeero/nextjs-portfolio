import React, { Component } from 'react';

class HeaderHeading extends Component {
  constructor(props) {
    super(props);

    this.state = { displayHeader: 'none' };

    this.setDisplay = this.setDisplay.bind(this);
  }

  componentDidMount() {
    const { color, pathname } = this.props;
    console.log(color, pathname);
  }

  componentDidUpdate(prevProps) {
    if (this.props.pathname !== prevProps.pathname) {
      this.setDisplay();
    }
  }

  setDisplay() {
    this.setState({ displayHeader: 'initial' });
  }

  render() {
    const { color, pathname, texts, targetRoute, targetRoute2 } = this.props;
    const { displayHeader } = this.state;
    let checkClassName = '';

    if (pathname == targetRoute || pathname == targetRoute2) {
      checkClassName = `header__wrapper__${color} active`;
    } else {
      checkClassName = `header__wrapper__${color} hidden`;
    }

    return (
      <div className={checkClassName}>
        <style jsx>{`
          .header__wrapper__${color}.hidden {
            display: ${displayHeader};
          }
        `}</style>
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
