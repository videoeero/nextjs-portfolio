import { SVGpopcorn, SVGresponsive, SVGenjoy } from './SVGicons';

import React, { Component } from 'react';

export default class PrincipleItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      principles: [false, false, false]
    };

    this.activatePrinciple = this.activatePrinciple.bind(this);
  }

  activatePrinciple = index => {
    const status = this.state.principles;
    status.map((el, i) => {
      if (i != index) {
        status[i] = false;
      }
    });
    status[index] = !this.state.principles[index];
    this.setState({ principles: status });
  };

  render() {
    const { principles } = this.state;
    const items = [
      {
        id: 'enjoy',
        title: ['Enjoyable', 'Experience'],
        summary: 'No lag + aesthetics = happy user',
        color: 'red',
        text:
          "The manda\u00ADtory stuff: Fast load times, op\u00ADti\u00ADmized images etc. as\u00ADsets, lag free in\u00ADter\u00ADac\u00ADtion. But op\u00ADti\u00ADmizing doesn't mean skip\u00ADping in\u00ADtu\u00ADitive and fun user ex\u00ADpe\u00ADri\u00ADence. Balanc\u00ADing be\u00ADtween fan\u00ADcy ef\u00ADfects and load times is the cru\u00ADcial thing."
      },
      {
        id: 'meaningful',
        title: ['Meaningful', 'Content'],
        summary: 'SEO, accessibility, relevance',
        color: 'green',
        text:
          "Making search en\u00ADgines hap\u00ADpy like this pear here isn't that hard, but acces\u00ADsi\u00ADble and rel\u00ADe\u00ADvant con\u00ADtent for a hu\u00ADman is an\u00ADot\u00ADher thing. This has to be kept in mind from the very be\u00ADgin\u00ADning of development process."
      },
      {
        id: 'responsive',
        title: ['Think', 'Responsively'],
        summary: "55' mobile phone would be impractical",
        color: 'blue',
        text:
          "Mobile de\u00ADvices with var\u00ADi\u00ADous screen types and sizes are not going any\u00ADwhere. Sure it wouldn't hurt to use phones little less, but frus\u00ADtrat\u00ADing mo\u00ADbile ex\u00ADpe\u00ADri\u00ADence isn't solution for that. Making the ex\u00ADpe\u00ADri\u00ADence smooth on every de\u00ADvice saves nerves!"
      }
    ];

    const createPrinciples = array =>
      array.map((item, index) => {
        const { id, title, text, summary, color } = item;
        let svgIcon;
        let svgIconBack;
        if (id == 'meaningful') {
          svgIcon = <SVGenjoy color={color} />;
          svgIconBack = <SVGenjoy color={'light'} />;
        } else if (id == 'enjoy') {
          svgIcon = <SVGpopcorn color={color} />;
          svgIconBack = <SVGpopcorn color={'light'} />;
        } else {
          svgIcon = <SVGresponsive color={color} />;
          svgIconBack = <SVGresponsive color={'light'} />;
        }

        return (
          <div
            key={`principle_${id}`}
            className='principle__item'
            className={`principle__item ${principles[index] ? 'active' : ''}`}
            onClick={() => this.activatePrinciple(index)}
            id={id}
          >
            <div
              className={`principle__item__front ${color}-bg ${
                principles[index] ? 'rotate' : ''
              }`}
            >
              <div className='principle__item__wrapper'>
                <div className='principle__svg'>{svgIcon}</div>
                <h3 className='principle__title'>{title[0]}</h3>
                <h3 className='principle__title heading__color'>{title[1]}</h3>
                <p className='principle__summary'>{summary}</p>
                <div className={`principle__button ${color}-bg`}>
                  <button>
                    <span>More &rarr;</span>
                  </button>
                </div>
              </div>
            </div>
            <div
              className={
                principles[index]
                  ? `principle__item__back rotate ${color}-bg`
                  : `principle__item__back ${color}-bg`
              }
            >
              <div>
                <p className='principle__text'>
                  {svgIconBack}
                  {text}
                </p>
              </div>
            </div>
          </div>
        );
      });

    return <>{createPrinciples(items)}</>;
  }
}
