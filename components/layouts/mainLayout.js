import React from 'react';
import Navigation from '../includes/Navigation';
import Head from 'next/head';
// import '../../styles/main.scss';

const MainLayout = props => (
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
      <link rel='stylesheet' href='/css/styles.css'></link>
    </Head>
    <div className='mainLayout_container'>
      <Navigation />
      {props.children}
    </div>
  </>
);

export default MainLayout;
