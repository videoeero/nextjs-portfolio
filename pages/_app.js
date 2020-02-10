import App from 'next/app';
import React from 'react';
import MainLayout from '../components/layouts/mainLayout';
import '../src/styles/main.scss';
import Router from 'next/router';
import { trackPageView } from '../helpers/trackPageView';

class WebsiteApp extends App {
  componentDidMount() {
    Router.onRouteChangeComplete = url => {
      trackPageView(url);
    };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    );
  }
}

export default WebsiteApp;
