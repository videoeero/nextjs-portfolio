import React, { Component } from 'react';
import Link from 'next/link';

class Home extends Component {
  render() {
    return (
      <React.Fragment key='indexPage'>
        <section id='#about' className='about'>
          <h2 className='heading heading__h2'>Who am I?</h2>
          <p className='paragraph paragraph__strong'>
            Half Coder, half Designer, extended from Teacher class component
          </p>
          <p className='paragraph'>
            Hello, and thanks for your interest in my web page. My name is Eero,
            living in Turku, the original capital of Finland. I'm a computer
            science guy with infinite eagerness to learn more. I'm a mixture of
            your friendly neighborhood programmer, a designer pursuing to create
            both functional and nice to look at end results and a teacher, who
            does his best to share good practices among co-workers and learners.
          </p>
          <p className='paragraph'>
            For more accurate statistics about things I have done, check out
            <Link href='/skills'>
              <a className='paragraph__link'> Skills & Experience</a>
            </Link>{' '}
            page or
            <Link href='/skills'>
              <a className='paragraph__link'> Portfolio</a>
            </Link>{' '}
            for some of my most recent work. Please feel free to
            <a href='mailto:eero.suvanto@gmail.com' className='paragraph__link'>
              &nbsp;contact me
            </a>
            , if you are interested in working with me!
          </p>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
