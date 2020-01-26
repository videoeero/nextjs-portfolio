import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <section id='#about' className='about'>
        <h2 className='heading heading__h2'>About me</h2>
        <p className='paragraph paragraph__strong'>
          Half Coder, half Designer, extended from Teacher class component
        </p>
        <p className='paragraph'>
          Hello, and thanks for your interest to my web page. So I'm a computer
          science guy with infinite eagerness to learn more. I'm a mixture of
          your friendly neighborhood programmer, a designer pursuing to create
          both functional and nice to look at end results and a teacher, who
          does his best to share good practices among co-workers and learners.
        </p>
        <p className='paragraph'>
          Read below for more accurate statistics about me and my backgrounds.
          Please be free to contact, if you are interested in working with me!
        </p>
      </section>
    </>
  );
};

export default About;
