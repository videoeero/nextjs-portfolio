import React, { Component } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import portfolioData from '../src/data/portfolioData';
import skillsData from '../src/data/skillsData';
import '../src/styles/main.scss';

class Home extends Component {
  static async getInitialProps() {
    const portfolio = portfolioData;
    const skills = skillsData;

    return { portfolio: portfolio, skills: skills };
  }

  render() {
    const { portfolio, skills } = this.props;
    return (
      <>
        <Header />
        <About />
        <Education />
        <Skills skills={skills} />
        <Portfolio projects={portfolio} />
      </>
    );
  }
}

export default Home;
