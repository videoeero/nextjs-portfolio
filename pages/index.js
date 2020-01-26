import React, { Component } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import portfolioData from '../src/data/portfolioData';
import '../src/styles/main.scss';

class Home extends Component {
  static async getInitialProps() {
    const portfolio = portfolioData;

    return { portfolio: portfolio };
  }

  render() {
    const { portfolio } = this.props;
    return (
      <>
        <Header />
        <About />
        <Skills />
        <Portfolio projects={portfolio} />
      </>
    );
  }
}

export default Home;
