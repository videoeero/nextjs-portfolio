import React, { Component } from 'react';
import Head from 'next/head';
import Skill from '../components/Skill';
import skills from '../src/data/skillsData';
import workData from '../src/data/workData';
import eduData from '../src/data/educationData';
import expData from '../src/data/expData';
import {
  SVGskill,
  SVGexperience,
  SVGeducation,
  SVGwork
} from '../components/SVGicons';

class skillsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStatus: skills.map(el => false)
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    const skillStatus = [...this.state.activeStatus];
    skillStatus.map((el, i) => {
      if (i != index) {
        skillStatus[i] = false;
      }
    });
    skillStatus[index] = !this.state.activeStatus[index];
    this.setState({ activeStatus: skillStatus });
  }

  render() {
    const skillList = skills.map((skill, index) => {
      return (
        <Skill
          key={`skill__${skill.title}`}
          handleClick={this.handleClick}
          index={index}
          skill={skill}
          active={this.state.activeStatus[index]}
        />
      );
    });

    const showExperience = array =>
      array.map((work, index) => {
        const { year, employer, title, description, shortDesc } = work;

        return (
          <div key={`exp${index}`} className='exp__item'>
            <p className='exp__year'>{year}</p>
            <h3 className='heading__h3'>
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
        <Head>
          <meta property='og:url' content='https://findeero.now.sh/skills' />
        </Head>

        <div className='exp__main'>
          <section className='exp__section' id='#skills'>
            <div className='heading__wrapper'>
              <SVGskill color={'blue'} desc={'Picture of a fist'} />

              <h2 className='heading__h2'>Skills</h2>
            </div>

            <div className='skills'>{skillList}</div>
          </section>

          <section className='exp__section' id='education'>
            <div className='heading__wrapper'>
              <SVGeducation
                color={'red'}
                desc={'Picture of an apple in top of a book'}
              />
              <h2 className='heading__h2 heading__gradient'>Education</h2>
            </div>

            <div className='exp'>{showExperience(eduData)}</div>
          </section>

          <section className='exp__section' name='experience' id='experience'>
            <div className='heading__borders__blue'>
              <div className='heading__wrapper'>
                <SVGwork
                  color={'blue'}
                  desc={'Picture of hand holding a wrench'}
                />
                <h2 className='heading__h2'>Work Experience</h2>
              </div>
            </div>
            <div className='exp'>{showExperience(workData)}</div>
          </section>

          <section className='exp__section' id='otherexperience'>
            <div className='heading__wrapper'>
              <SVGexperience
                color={'red'}
                desc={'Picture of a person surrounded by stars'}
              />
              <h2 className='heading__h2'>Other Experience & Achievements</h2>
            </div>

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
