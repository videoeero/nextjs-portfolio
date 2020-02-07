import React, { Component } from 'react';
import Navigation from '../includes/Navigation';
import Header from '../includes/Header';
import Footer from '../includes/Footer';
import Head from 'next/head';
import { PageTransition } from 'next-page-transitions';
import { withRouter } from 'next/router';

class MainLayout extends Component {
  render() {
    const { children, router } = this.props;

    return (
      <>
        <Head>
          <title>Eero Suvanto</title>
          <meta name='keywords' content='web,developer,portfolio,cv' />
          <meta
            name='description'
            content='Portfolio / CV of Eero Suvanto, Web & Edutech Developer'
          />
          <meta property='og:title' content='Eero Suvanto' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:url' content='https://eerosuvanto.netlify.com' />
          <meta property='og:type' content='website' />
          <meta
            property='og:description'
            content='Portfolio / CV of Eero Suvanto, Web & Edutech Developer'
          />
        </Head>
        <div className='mainLayout_container'>
          <Header />
          <Navigation />
          <PageTransition timeout={300} classNames='page-transition'>
            {React.cloneElement(children, {
              key: router.pathname
            })}
          </PageTransition>
          <Footer />
        </div>
      </>
    );
  }
}

export default withRouter(MainLayout);
