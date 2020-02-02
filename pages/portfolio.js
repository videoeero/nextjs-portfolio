import React, { Component } from 'react';
import portfolioData from '../src/data/portfolioData';

class portfolio extends Component {
  render() {
    const showPortfolio = array =>
      array.map((work, index) => {
        const { title, summary, description, url, resources } = work;

        return (
          <div key={`portfolio__${index}`} className='portfolio__item'>
            <h2 className='heading__h2 portfolio__title'>{title}</h2>
            <p className='paragraph paragraph__strong'>{summary}</p>
            <div className='portfolio__wrapper'>
              <img
                src='img/eero.jpg'
                alt={title}
                className='portfolio__image'
              />
              <div className='portfolio__wrapper__right'>
                <div className='portfolio__wrapper__text'>
                  <div className='portfolio__description'>
                    <p className='portfolio__paragraph'>{description}</p>
                  </div>
                  <button className='button portfolio__showMore'>
                    Show more
                  </button>
                </div>

                <div className='portfolio__buttons'>
                  {resources.map((item, i) => (
                    <a
                      key={`${title}_res_${i}`}
                      className='button'
                      href={item.url}
                    >
                      <div className='button__bg__red'>{item.title}</div>
                      <div className='button__bg__blue'>{item.title}</div>

                      <p className='button__title'>{item.title}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      });

    return (
      <section className='portfolio'>{showPortfolio(portfolioData)}</section>
    );
  }
}

export default portfolio;
