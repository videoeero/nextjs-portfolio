import React, { Component } from 'react';
import Link from 'next/link';
import uuid from 'react-uuid';
import skills from '../src/data/skillsData';
import workData from '../src/data/workData';
import eduData from '../src/data/educationData';
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
            <p className='skills__level'>{skill.level}0%</p>
          </div>
        );
      });

    const showExperience = array =>
      array.map((work, index) => {
        const { year, employer, title, description, shortDesc } = work;

        return (
          <div key={uuid()} className='exp__item'>
            <p className='exp__year'>{year}</p>
            <h3 className='heading heading__h3'>
              {employer} / {title}
            </h3>

            {shortDesc ? (
              <p className='paragraph paragraph__centered'>{description}</p>
            ) : (
              <p className='paragraph'>{description}</p>
            )}
          </div>
        );
      });

    return (
      <>
        <div className='exp__main'>
          <section className='exp__section' id='#skills'>
            <h2 className='heading heading__h2'>Skills</h2>
            <div className='skills'>{showSkills()}</div>
          </section>
          <section className='exp__section'>
            <h2 className='heading heading__h2'>Education</h2>
            <div className='exp'>{showExperience(eduData)}</div>
          </section>
          <section className='exp__section'>
            <h2 className='heading heading__h2'>Work Experience</h2>
            <div className='exp'>{showExperience(workData)}</div>
          </section>
          <section className='exp__section'>
            <h2 className='heading heading__h2'>
              Other Experience & Achievements
            </h2>
            <div className='exp'>{showExperience(expData)}</div>
          </section>
        </div>
      </>
    );
  }
}

// const Skills = props => {

// };

export default skillsPage;
