import React, { Component } from 'react';
import Link from 'next/link';
import IndexWheel from '../components/layouts/IndexWheel';
import ButtonGradient from '../components/Button';
import PrincipleItem from '../components/PrincipleItem';
import Head from 'next/head';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Head>
          <meta property='og:url' content='https://findeero.now.sh' />
          <meta
            property='og:description'
            content='Portfolio / CV website of Eero Suvanto, Web & Edutech Developer'
          />
          <meta
            name='description'
            content='Portfolio / CV website of Eero Suvanto, Web & Edutech Developer'
          />
        </Head>
        <section className='me' id='me'>
          <div className='me__wrapper__left'>
            <IndexWheel />
          </div>
          <div className='me__wrapper__right'>
            <h2 className='heading__h2'>Hey You!</h2>
            <p className='me__paragraph'>
              And thank your for your interest in my website. I hope you find
              what you are looking for!
            </p>
            <p className='paragraph__italic'>Best regards,</p>
            <p className='paragraph__italic'>Eero</p>
          </div>
        </section>
        <section className='about' name='whoami' id='whoami'>
          <h2 className='heading__h2'>Who am I?</h2>
          <p className='paragraph paragraph__italic'>
            Half Coder, half Designer, extended from Teacher class component
          </p>
          <div className='me__wrapper'>
            <div className='me__img__profile__wrapper'>
              <img
                src='/img/eero2.webp'
                alt='Happy Eero'
                className='me__img__profile'
                id='eero2'
              />
              <img
                src='/img/eero3.webp'
                alt='Adventure Eero'
                className='me__img__profile'
                id='eero3'
              />
              <img
                src='/img/eero4.webp'
                alt='Fanboy Eero with Marvel t-shirt'
                className='me__img__profile'
                id='eero4'
              />
              {/* <img
                src='/img/eero_mobile.png'
                alt='Happy Eero'
                className='me__img__profile'
                id='eero_mobile'
              /> */}
            </div>

            <p className='paragraph'>
              So I'm Eero, living in Turku, the original capital of Finland. I'm
              a computer science guy with infinite eagerness to learn more. I'm
              a mixture of your friendly neighborhood developer, a designer
              pursuing to create both functional and nice to look at end results
              and a teacher, who does his best to share good practices among
              co-workers and learners.
            </p>
            <p className='paragraph'>
              What else I do? Well being a fan boy of Star Wars, Marvel, DC,
              Monty Python... (list goes on) takes it's time. As a contrast to
              smashing keyboard, I'll try to smash weights in the gym (gently
              enough, I'm not a crossfitter). Videogames from C64 and NES to
              this date have influenced greatly on my creativity and
              imagination. Disclaimer: Consoles are cool but there can be only
              one PC master race.
            </p>
            <p className='paragraph'>
              For more details about things I have done so far, check out
              <Link href='/skills'>
                <a className='paragraph__link'> Skills & Experience</a>
              </Link>{' '}
              page or
              <Link href='/skills'>
                <a className='paragraph__link'> Portfolio</a>
              </Link>{' '}
              for some of my favorite projects. Please feel free to
              <a href='#contact' className='paragraph__link'>
                &nbsp;contact me
              </a>
              , if you are interested in working with me!
            </p>
          </div>
          <div className='me__buttons'>
            <Link href='/skills'>
              <a className='button'>
                <ButtonGradient title={'Skills & Experience'} />
              </a>
            </Link>
            <Link href='/portfolio'>
              <a className='button'>
                <ButtonGradient title={'Portfolio'} />
              </a>
            </Link>
            <Link href='#contact'>
              <a className='button'>
                <ButtonGradient title={'Contact me'} />
              </a>
            </Link>
          </div>
        </section>
        <section className='about' id='principles'>
          <h2 className='heading__h2'>My Design Principles</h2>
          <p className='paragraph paragraph__italic'>
            There's usually more than just one superb solution, but avoiding the
            bad ones isn't rocket science.
          </p>

          <div className='principle__wrapper'>
            <PrincipleItem />
          </div>
        </section>
        <section name='contact' className='about contact' id='contact'>
          <h2 className='heading__h2'>Contact me</h2>
          <p className='paragraph paragraph__centered'>
            To reach me out most easily, you can send me a message on
            <a
              href='https://www.linkedin.com/in/eero-suvanto-739362147/'
              target='_blank'
              rel='noopener'
              className='paragraph__link'
            >
              &nbsp;LinkedIn.
            </a>{' '}
            For alternatives, check out the footer in the end of each page.
          </p>
          <a
            href='https://www.linkedin.com/in/eero-suvanto-739362147/'
            target='_blank'
            rel='noopener'
            className='button'
          >
            <ButtonGradient title={'LinkedIn'} />
          </a>
        </section>
      </>
    );
  }
}

export default Home;
