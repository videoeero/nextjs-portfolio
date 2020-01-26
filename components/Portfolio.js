import React from 'react';

import Link from 'next/link';

const Skills = props => {
  const showProjects = () =>
    props.projects.map(project => {
      return (
        <div>
          <h4>{project.title}</h4>
        </div>
      );
    });

  return (
    <>
      <section id='#portfolio' className='about'>
        <h2 className='heading heading__h2'>Portfolio!</h2>
        <p className='paragraph'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed repellat
          eaque, quia temporibus est voluptate blanditiis expedita dolorem at
          magni impedit cum dolorum molestias maxime alias animi nisi dicta
          veritatis!
        </p>
        {showProjects()}
      </section>
    </>
  );
};

export default Skills;
