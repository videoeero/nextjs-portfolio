import React, { Component } from 'react';
import Link from 'next/link';
import IndexWheel from '../components/layouts/IndexWheel';
import ButtonGradient from '../components/Button';
import {
  SVGpopcorn,
  SVGresponsive,
  SVGstars,
  SVGenjoy
} from '../components/SVGicons';

class Home extends Component {
  render() {
    return (
      <>
        <section className='me'>
          <div className='me__wrapper__left'>
            <IndexWheel />
          </div>
          <div className='me__wrapper__right'>
            <h2 className='heading__h2'>Hello!</h2>
            <p className='me__paragraph'>
              And thanks for your interest in my website. I hope you find what
              you are looking for!
            </p>
            <p className='paragraph__italic'>Best regards</p>
            <p className='paragraph__italic'>Eero</p>
          </div>
        </section>
        <section className='about' id='whoami'>
          <h2 className='heading__h2'>Who am I?</h2>
          <p className='paragraph paragraph__italic'>
            Half Coder, half Designer, extended from Teacher class component
          </p>
          <div className='me__wrapper'>
            <div className='me__img__profile__wrapper'>
              <div className='me__img__profile'>&nbsp;</div>
            </div>

            <p className='paragraph'>
              So I'm Eero, living in Turku, the original capital of Finland. I'm
              a computer science guy with infinite eagerness to learn more. I'm
              a mixture of your friendly neighborhood programmer, a designer
              pursuing to create both functional and nice to look at end results
              and a teacher, who does his best to share good practices among
              co-workers and learners.
            </p>
            {/* <p className='paragraph'>
              I'm currently focused on combination of front-end development and
              UI/UX design, but I'm not afraid of learning more on back-end too,
              if given chance on interesting project! Other buzzwords I'd like
              to / will learn more about are data analytics and machine
              learning. Visually engaging statistic & big data applications
              makes inspecting numbers so much more fun.
            </p> */}
            <p className='paragraph'>
              What else I do? Well being a fan boy of Star Wars, Marvel, DC,
              Monty Python... (list goes on) takes it's time. As a contrast to
              smashing keyboard, I'll try to smash weights in the gym (gently
              enough, I'm not a crossfitter). Videogames from C64 and NES to
              this date have influenced greatly on my imagination. Disclaimer:
              Consoles are cool but there can be only one PC master race.
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
            <div className='principle__item__shadow'>
              <div className='principle__shape'></div>
              <div className='principle__item' id='enjoy'>
                <div className='principle__svg'>
                  <SVGpopcorn color={'red'} />
                </div>
                <h3 className='principle__title'>Enjoyable</h3>
                <h3 className='principle__title heading__color'>Experience</h3>
                <p className='principle__text'>
                  The mandatory stuff: Fast load times, optimized assets, lag
                  free interaction. But these doesn't unable creating intuitive
                  and fun user experience!
                </p>
              </div>
            </div>
            <div className='principle__item__shadow'>
              <div className='principle__item' id='meaninful'>
                <div className='principle__svg'>
                  <SVGenjoy color={'green'} />
                </div>
                <h3 className='principle__title'>Meaningful</h3>
                <h3 className='principle__title heading__color'>Content</h3>
                <p className='principle__text'>
                  Making search engines happy like this pear here isn't that
                  hard, but accessible and relevant content for a human is
                  another thing. This has to be kept in mind from the very
                  beginning of development process.
                </p>
              </div>
            </div>
            <div className='principle__item__shadow'>
              <div className='principle__item' id='responsive'>
                <div className='principle__svg'>
                  <SVGresponsive color={'blue'} />
                </div>
                <h3 className='principle__title'>Think</h3>
                <h3 className='principle__title heading__color'>
                  Responsively
                </h3>
                <p className='principle__text'>
                  Mobile devices with various screen sizes are not going
                  anywhere, but bad mobile experience is frustrating. Making the
                  experience smooth on every device saves nerves!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section name='contact' className='about' id='contact'>
          <h2 className='heading__h2'>Contact me</h2>
          <p className='paragraph'>
            To reach me out most easily, you can send me a message on
            <a
              href='mailto:eero.suvanto@gmail.com'
              target='_blank'
              className='paragraph__link'
            >
              &nbsp;LinkedIn.
            </a>{' '}
            &nbsp; Or
            <a
              href='mailto:eero.suvanto@gmail.com'
              target='_blank'
              rel='noopener'
              className='paragraph__link'
            >
              &nbsp;good-old email&nbsp;
            </a>
            also does the trick!
          </p>
        </section>
      </>
    );
  }
}

export default Home;
