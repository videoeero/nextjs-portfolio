import React, { Component } from 'react';
import Navigation from '../includes/Navigation';
import Header from '../includes/Header';
import Footer from '../includes/Footer';
import Head from 'next/head';
import { PageTransition } from 'next-page-transitions';
import { withRouter } from 'next/router';
import SVGGradient from '../SvgGradient';

class MainLayout extends Component {
  render() {
    const { children, router } = this.props;

    return (
      <>
        <Head>
          <title>Find Eero</title>
          <meta name='keywords' content='web,developer,portfolio,cv' />
          <meta property='og:title' content='Find Eero' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:type' content='website' />
          <meta
            property='og:image'
            content='https://findeero.now.sh/img/ogimage.jpg'
          />
          <meta
            property='og:description'
            content='Portfolio / CV website of Eero Suvanto, Web & Edutech Developer'
          />
          <meta
            name='description'
            content='Portfolio / CV website of Eero Suvanto, Web & Edutech Developer'
          />

          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/img/favicon/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/img/favicon/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/img/favicon/favicon-16x16.png'
          />
          <link rel='manifest' href='/img/favicon/site.webmanifest' />
          <link
            rel='mask-icon'
            href='/img/favicon/safari-pinned-tab.svg'
            color='#5bbad5'
          />
          <link rel='shortcut icon' href='/img/favicon/favicon.ico' />
          <meta name='msapplication-TileColor' content='#2d3142' />
          <meta
            name='msapplication-config'
            content='/img/favicon/browserconfig.xml'
          />
          <meta name='theme-color' content='#2d3142' />
        </Head>
        <div className='mainLayout_container'>
          <Header />
          <Navigation />

          <PageTransition timeout={300} classNames='page-transition'>
            {React.cloneElement(children, {
              key: router.pathname
            })}
          </PageTransition>
          <svg
            className='svgGradients'
            // style='width:0;height:0;position:absolute;'
            aria-hidden='true'
            focusable='false'
          >
            <SVGGradient color={'red'} />
            <SVGGradient color={'green'} />
            <SVGGradient color={'blue'} />
          </svg>
          <Footer />
        </div>
      </>
    );
  }
}

export default withRouter(MainLayout);
