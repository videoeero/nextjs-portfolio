import React from 'react';
import Link from 'next/link';
import {
  SVGwhoami,
  SVGprinciples,
  SVGcontact,
  SVGportfolio,
  SVGskill,
  SVGexperience
} from '../SVGicons';

export default function IndexWheel() {
  return (
    <>
      <div className='me__icons'>
        <Link href='#whoiam'>
          <a>
            <div className='me__icon' id='me__icon__aboutme'>
              <SVGwhoami color={'green'} />
              <h3 className='me__icon__heading green'>Who am I?</h3>
            </div>
          </a>
        </Link>
        <Link href='#whoiam'>
          <a>
            <div className='me__icon' id='me__icon__principles'>
              <SVGprinciples color={'red'} />
              <h3 className='me__icon__heading red'>Design principles</h3>
            </div>
          </a>
        </Link>
        <Link href='#whoiam'>
          <a>
            <div className='me__icon' id='me__icon__contact'>
              <SVGcontact color={'blue'} />
              <h3 className='me__icon__heading blue'>Contact me</h3>
            </div>
          </a>
        </Link>
        <Link href='/portfolio'>
          <a>
            <div className='me__icon' id='me__icon__portfolio'>
              <SVGportfolio color={'red'} />
              <h3 className='me__icon__heading red'>Portfolio</h3>
            </div>
          </a>
        </Link>
        <Link href='/skill'>
          <a>
            <div className='me__icon' id='me__icon__skills'>
              <SVGskill color={'blue'} />
              <h3 className='me__icon__heading blue'>Skills</h3>
            </div>
          </a>
        </Link>
        <a href='/skills#experience'>
          <div className='me__icon' id='me__icon__experience'>
            <SVGexperience color={'green'} />
            <h3 className='me__icon__heading green'>Experience</h3>
          </div>
        </a>
      </div>
      <Link href='#whoami'>
        <a className='me__img__wrapper'>
          <div className='me__img'>&nbsp;</div>
        </a>
      </Link>
    </>
  );
}
