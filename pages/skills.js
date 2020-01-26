import React, { Component } from 'react';
import Link from 'next/link';
import uuid from 'react-uuid';
import skills from '../src/data/skillsData';
import works from '../src/data/workData';
import exps from '../src/data/expData';
import expData from '../src/data/expData';

class skillsPage extends Component {
  render() {
    const showSkills = () =>
      skills.map((skill, index) => {
        return (
          <div key={uuid()} className='skills__item'>
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
            <p className='skills__level'>{skill.level}0 %</p>
          </div>
        );
      });

    const showWorks = array =>
      array.map((work, index) => {
        const { year, employer, title, description } = work;

        return (
          <div key={uuid()} className='works__item'>
            <div className='works__title'>
              <p className='works__year'>{year}</p>
              <h3 className='heading heading__h3'>
                {employer} / {title}
              </h3>
            </div>

            <p className='paragraph'>{description}</p>
          </div>
        );
      });

    return (
      <>
        <section id='#skills'>
          <h2 className='heading heading__h2'>Skills</h2>
          <div className='skills'>{showSkills()}</div>
        </section>
        <section>
          <h2 className='heading heading__h2'>Work Experience</h2>
          <div className='works'>{showWorks(works)}</div>
        </section>
        <section>
          <h2 className='heading heading__h2'>Other Experience</h2>
          <div className='works'>{showWorks(expData)}</div>
        </section>
      </>
    );
  }
}

// const Skills = props => {

// };

export default skillsPage;
