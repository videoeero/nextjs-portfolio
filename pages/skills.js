import React, { Component } from 'react';
import uuid from 'react-uuid';
import Skill from '../components/Skill';
import skills from '../src/data/skillsData';
import workData from '../src/data/workData';
import eduData from '../src/data/educationData';
import expData from '../src/data/expData';

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
        <>
          <Skill
            key={uuid}
            handleClick={this.handleClick}
            index={index}
            skill={skill}
            active={this.state.activeStatus[index]}
          />
        </>
      );
    });

    const showExperience = array =>
      array.map((work, index) => {
        const { year, employer, title, description, shortDesc } = work;

        return (
          <div className='exp__item'>
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
            <h2 className='heading heading__h2 heading__h2__blue'>Skills</h2>
            {/* <div className='skills'>{showSkills()}</div> */}
            <div className='skills'>{skillList}</div>
          </section>
          <section className='exp__section'>
            <h2 className='heading heading__h2'>Education</h2>
            <div className='exp'>{showExperience(eduData)}</div>
          </section>
          <section className='exp__section'>
            <h2 className='heading heading__h2 heading__h2__blue'>
              Work Experience
            </h2>
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
