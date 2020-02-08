import React, { Component } from 'react';
import portfolioData from '../src/data/portfolioData';
import Head from 'next/head';

class portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeShowcase: portfolioData.map(el => false)
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    const showcaseStatus = [...this.state.activeShowcase];
    showcaseStatus.map((el, i) => {
      if (i != index) {
        showcaseStatus[i] = false;
      }
    });
    showcaseStatus[index] = !this.state.activeShowcase[index];
    this.setState({ activeShowcase: showcaseStatus });
  }

  render() {
    const { activeShowcase } = this.state;

    const showPortfolio = array =>
      array.map((work, index) => {
        const {
          title,
          summary,
          description,
          image,
          slug,
          url,
          resources
        } = work;

        return (
          <>
            <Head>
              <meta
                property='og:url'
                content='https://findeero.now.sh/portfolio'
              />
            </Head>

            <div key={`portfolio__${index}`} className='portfolio__item'>
              <div className='portfolio__wrapper'>
                <a
                  className='portfolio__image'
                  id={`${slug}_bg`}
                  href={url}
                  target='_blank'
                  rel='noopener'
                  style={{ backgroundImage: `url(${image})` }}
                >
                  &nbsp;
                </a>
                {/* <img src={image} alt={title} className='portfolio__image' /> */}
                <div className='portfolio__wrapper__right'>
                  <h2 className='heading__h2 portfolio__title'>{title}</h2>
                  <p className='paragraph paragraph__italic'>{summary}</p>
                  <div className='portfolio__buttons'>
                    {resources.map((item, i) => (
                      <a
                        key={`${title}_res_${i}`}
                        className='paragraph__link'
                        href={item.url}
                        target='_blank'
                        rel='noopener'
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                  <div className='portfolio__wrapper__text'>
                    <div
                      className={
                        activeShowcase[index]
                          ? 'portfolio__description active'
                          : 'portfolio__description'
                      }
                    >
                      <p className='portfolio__paragraph'>{description}</p>
                      <div className='portfolio__fog'>&nbsp;</div>
                      <button
                        onClick={() => this.handleClick(index)}
                        className='portfolio__button'
                      >
                        <svg
                          className={
                            activeShowcase[index]
                              ? 'portfolio__button__icon active'
                              : 'portfolio__button__icon'
                          }
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 80 48.8'
                        >
                          <path d='M40 48.8L0 8.8 8.8 0 40 31.2 71.2 0 80 8.8z' />
                        </svg>
                      </button>
                    </div>

                    {/* <div className='portfolio__showmore'></div> */}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      });

    return (
      <section className='portfolio'>{showPortfolio(portfolioData)}</section>
    );
  }
}

export default portfolio;
