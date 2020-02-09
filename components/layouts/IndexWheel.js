import React from 'react';
import Link from 'next/link';
import LinkWithHash from '../LinkWithHash';
import checkUrl from '../checkUrl';
import {
  SVGwhoami,
  SVGprinciples,
  SVGcontact,
  SVGportfolio,
  SVGskill,
  SVGexperience
} from '../SVGicons';

export default function IndexWheel() {
  const handleClick = (url, pathname) => {
    checkUrl(url, pathname);
  };

  return (
    <>
      <div className='me__icons'>
        <Link href='#whoami'>
          <a title='Who am I?'>
            <div className='me__icon' id='me__icon__aboutme'>
              <h3 className='me__icon__heading green'>Who am I?</h3>
              <SVGwhoami
                color={'green'}
                desc={'Silhouette picture of a person'}
              />
            </div>
          </a>
        </Link>
        <Link href='#principles'>
          <a title='Design Principles'>
            <div className='me__icon' id='me__icon__principles'>
              <h3 className='me__icon__heading red'>Design Principles</h3>
              <SVGprinciples
                color={'red'}
                desc={'Picture of three mountains with flag on the top of one'}
              />
            </div>
          </a>
        </Link>
        <Link href='#contact'>
          <a title='Contact Me'>
            <div className='me__icon' id='me__icon__contact'>
              <h3 className='me__icon__heading blue'>Contact Me</h3>
              <SVGcontact color={'blue'} desc={'Picture of speech bubbles'} />
            </div>
          </a>
        </Link>
        <Link href='/portfolio'>
          <a title='Portfolio'>
            <div className='me__icon' id='me__icon__portfolio'>
              <h3 className='me__icon__heading red'>Portfolio</h3>
              <SVGportfolio
                color={'red'}
                desc={'Picture of three mountains with flag on the top of one'}
              />
            </div>
          </a>
        </Link>
        <Link href='/skills'>
          <a title='Skills'>
            <div className='me__icon' id='me__icon__skills'>
              <h3 className='me__icon__heading blue'>Skills</h3>
              <SVGskill color={'blue'} desc={'Picture of a fist'} />
            </div>
          </a>
        </Link>
        <LinkWithHash href='/skills#experience'>
          <a onClick={() => handleClick('/skills#experience', '/skills')}>
            <div className='me__icon' id='me__icon__experience'>
              <h3 className='me__icon__heading green'>Experience</h3>
              <SVGexperience
                color={'green'}
                desc={'Picture of a person surrounded by stars'}
              />
            </div>
          </a>
        </LinkWithHash>
      </div>
      <Link href='#whoami'>
        <a className='me__img__wrapper'>
          <img
            className='me__img'
            src='/img/eero.png'
            alt='Picture of me - Eero'
          ></img>
        </a>
      </Link>
    </>
  );
}
