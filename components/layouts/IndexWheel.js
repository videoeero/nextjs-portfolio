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
          <a>
            <div className='me__icon' id='me__icon__aboutme'>
              <SVGwhoami color={'green'} />
              <h3 className='me__icon__heading green'>Who am I?</h3>
            </div>
          </a>
        </Link>
        <Link href='#principles'>
          <a>
            <div className='me__icon' id='me__icon__principles'>
              <SVGprinciples color={'red'} />
              <h3 className='me__icon__heading red'>Design principles</h3>
            </div>
          </a>
        </Link>
        <Link href='#contact'>
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
        <Link href='/skills'>
          <a>
            <div className='me__icon' id='me__icon__skills'>
              <SVGskill color={'blue'} />
              <h3 className='me__icon__heading blue'>Skills</h3>
            </div>
          </a>
        </Link>
        <LinkWithHash href='/skills#experience'>
          <a onClick={() => handleClick('/skills#experience', '/skills')}>
            <div className='me__icon' id='me__icon__experience'>
              <SVGexperience color={'green'} />
              <h3 className='me__icon__heading green'>Experience</h3>
            </div>
          </a>
        </LinkWithHash>
      </div>
      <Link href='#whoami'>
        <a className='me__img__wrapper'>
          {/* <div className='me__img'>&nbsp;</div> */}
          <img
            class='me__img'
            src='/img/eero.jpg'
            alt='This is me - Eero'
          ></img>
          <img
            className='me__img__2'
            // style={{ clipPath: 'url(#hexagon)' }}
            src='/img/eero.jpg'
            alt='This is me - Eero'
          ></img>
          <svg height='0' width='0'>
            <defs>
              <clipPath id='hexagon'>
                <path
                  fill='#FFFFFF'
                  stroke='#000000'
                  stroke-width='1.5794'
                  stroke-miterlimit='10'
                  d='M215,100.3c97.8-32.6,90.5-71.9,336-77.6
        c92.4-2.1,98.1,81.6,121.8,116.4c101.7,149.9,53.5,155.9,14.7,178c-96.4,54.9,5.4,269-257,115.1c-57-33.5-203,46.3-263.7,20.1
        c-33.5-14.5-132.5-45.5-95-111.1C125.9,246.6,98.6,139.1,215,100.3z'
                ></path>
              </clipPath>
            </defs>
          </svg>
        </a>
      </Link>
    </>
  );
}
