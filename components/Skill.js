import React, { Component } from 'react';

export default class Skill extends Component {
  render() {
    const { skill, index, active } = this.props;

    let activeSkillClass = active ? 'skills__item active' : 'skills__item';

    return (
      <>
        <div
          className={activeSkillClass}
          onClick={() => this.props.handleClick(this.props.index)}
        >
          <div className='skills__text'>
            <h4 className='heading heading__h3'>{skill.title}</h4>
            <p className='skills__text__paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              optio corporis nesciunt magnam quod ratione aliquid, dignissimos,
              voluptas obcaecati soluta repudiandae nisi repellat ut asperiores
              voluptatibus eum aut magni laudantium.
            </p>
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
                  style={{ width: `${skill.level * 10}%` }}
                >
                  &nbsp;
                </div>
              </div>
            </div>
            <p className='skills__level'>{skill.level}0%</p>
          </div>
        </div>
      </>
    );
  }
}
