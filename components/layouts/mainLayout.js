import React, { Component } from 'react';
import Navigation from '../includes/Navigation';
import Header from '../includes/Header';
import Footer from '../includes/Footer';
import Head from 'next/head';
import { PageTransition } from 'next-page-transitions';

// import '../../styles/main.scss';

class MainLayout extends Component {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    console.log(pageProps);
    return { pageProps };
  }

  render() {
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
          <Navigation />
          <Header />
          <PageTransition timeout={300} classNames='page-transition'>
            {this.props.children}
          </PageTransition>
          <Footer />
        </div>
      </>
    );
  }
}

export default MainLayout;
