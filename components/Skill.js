import React, { Component } from 'react';

export default class Skill extends Component {
  render() {
    const { skill, index, active } = this.props;

    let activeSkillClass = active ? 'skills__item active' : 'skills__item';

    return (
      <>
        <div
          className={activeSkillClass}
          // onClick={() => this.props.handleClick(this.props.index)}
        >
          <div className='skills__text'>
            <h3 className='heading__h3'>{skill.title}</h3>
            <p className='skills__text__paragraph'>{skill.text}</p>
          </div>
          <div className='skills__wrapper'>
            <p className='skills__title'>{skill.title}</p>
            <div className='skills__bar'>
              <div
                className='skills__animate'
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className='skills__bar__inner'
                  // style={{ width: `${skill.level * 10}%` }}
                >
                  &nbsp;
                </div>
              </div>
              <div
                className='skills__bar__right'
                style={{ width: `${100 - skill.level}%` }}
              ></div>
            </div>
            <p className='skills__level'>{skill.level}%</p>
          </div>
        </div>
      </>
    );
  }
}
