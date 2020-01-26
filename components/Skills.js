import React from 'react';
import Link from 'next/link';

const Skills = props => {
  const showSkills = () =>
    props.skills.map((skill, index) => {
      return (
        <div className='skills__item'>
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

  return (
    <>
      <section id='#about' className='about'>
        <h2 className='heading heading__h2'>Skills</h2>
        <div className='skills'>{showSkills()}</div>
      </section>
    </>
  );
};

export default Skills;
