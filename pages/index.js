import React, { Component } from 'react';
import Header from '../components/includes/Header';
import '../styles/main.scss';

class Home extends Component {
  static async getInitialProps() {
    let portfolioData;

    return {
      portfolioData
    };
  }

  render() {
    const { portfolioData } = this.props;
    console.log(portfolioData);
    return (
      <>
        <Header />
        <div>Kotisivuuu</div>
      </>
    );
  }
}

export default Home;
