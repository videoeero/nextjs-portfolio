import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
  render() {
    return (
      <footer className='flex flex__column'>
        <div className='flex'>
          <a
            href='https://www.linkedin.com/in/eero-suvanto-739362147/'
            aria-label='LinkedIn'
            rel='noopener'
            target='_blank'
          >
            <svg
              className='icon icon__linkedin'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
            </svg>
          </a>

          <a
            href='https://github.com/videoeero'
            aria-label='GitHub'
            rel='noopener'
            target='_blank'
          >
            >
            <svg
              className='icon icon__github'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              aria-hidden='true'
            >
              <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
            </svg>
          </a>

          <a
            href='https://www.instagram.com/videoeero/'
            aria-label='Instagram'
            rel='noopener'
            target='_blank'
          >
            <svg
              className='icon icon__insta'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1024 1024'
            >
              <path d='M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z' />
            </svg>
          </a>

          <a
            href='http://youtube.com/videoeero'
            aria-label='YouTube'
            rel='noopener'
            target='_blank'
          >
            <svg
              className='icon icon__youtube'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 202.3 141.6'
            >
              <path d='M101.2.3S38 .3 22.1 4.4C13.8 6.8 6.7 13.8 4.3 22.1.2 38 .2 71.1.2 71.1s0 33.1 4.1 48.4c2.4 8.9 9.4 15.3 17.7 17.7 15.9 4.1 79.1 4.1 79.1 4.1s63.2 0 79.1-4.1c8.9-2.4 15.3-8.9 17.7-17.7 4.1-15.9 4.1-48.4 4.1-48.4s0-33.1-4.1-49c-2.4-8.9-8.9-15.3-17.7-17.7-15.9-4.1-79-4.1-79-4.1zM81.1 41l52.5 30.1-52.5 30.1V41z' />
            </svg>
          </a>

          <a href='mailto:eero.suvanto@gmail.com' aria-label='Email'>
            <svg
              className='icon icon__mail'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1024 1024'
            >
              <path d='M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z' />
            </svg>
          </a>
        </div>
        <p>&copy; 2020 Eero Suvanto</p>
      </footer>
    );
  }
}

export default Footer;
