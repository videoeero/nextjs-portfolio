import App, { Container } from 'next/app';
import React from 'react';

import MainLayout from '../components/layouts/mainLayout';
import '../src/styles/main.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    );
  }
}

export default MyApp;
