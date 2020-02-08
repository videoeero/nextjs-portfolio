import React from 'react';
import SVGGradient from './SvgGradient';

export function SVGwhoami({ color }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34.3 46.5'>
      <SVGGradient color={color} />
      <path
        className={`icon-bg__${color}`}
        d='M26.2 6.2c0-4.8-8-4.8-8-4.8-.7 0 0-1.4 0-1.4-5.1-.7-6.5 2.7-6.5 2.7-4.4 0-3.6 4.8-3.6 4.8v5.4c0 5 4.1 9.1 9.1 9.1s9.1-4.1 9.1-9.1l-.1-6.7zM17.1 20c-3.9 0-7-3.1-7.1-7l.2-4.7c.8-.8 1.8-1.4 2.9-1.8.7 2.3 10.2 3.8 10.2 3.8.2.1.3.2.5.3 1.3 3.6-.5 7.7-4.1 9-.9.3-1.7.4-2.6.4zm16.2 20.1h-7c-.6 0-1-.4-1-1s.4-1 1-1h6c-.6-6.4-7.1-11.4-15.1-11.4S2.7 31.7 2 38.1h6c.6 0 1 .4 1 1s-.4 1-1 1H1c-.6 0-1-.4-1-1 0-8 7.7-14.4 17.1-14.4s17.1 6.5 17.1 14.4c.1.6-.4 1-.9 1z'
      />
      <path
        className={`icon-bg__${color}`}
        d='M17.1 31.7c-4.1 0-7.4 3.3-7.4 7.4s3.3 7.4 7.4 7.4 7.4-3.3 7.4-7.4-3.3-7.4-7.4-7.4z'
      />
      <path
        d='M16.2 40.2c0-1.8 1.9-2 1.9-3.2 0-.5-.4-.9-1-.9-.5 0-1.1.1-1.9.6v-1.6c.5-.3 1.2-.6 2-.6 1.4 0 2.6.9 2.6 2.3 0 2.1-2.1 2.3-2.1 3.6v.4h-1.5v-.6zm.8 1.3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z'
        fill='#fff'
      />
    </svg>
  );
}

export function SVGprinciples({ color }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 91.1 94.9'>
      <SVGGradient color={color} />
      <path
        className={`icon-bg__${color}`}
        d='M6.8 94.9h76.4l-6.6-10.7h14.5L65.8 42.1l-7.6 12.6L47 36.6V24.2h26.4L62.7 12.1 73.4 0H43v36.6L32.3 53.8l-7-11.7L0 84.2h13.4L6.8 94.9zM47 4h17.6l-7.2 8.1 7.2 8.1H47V4zM14 90.9l15.6-25.1 8.1 12 7.9-9.3 7.9 9.3L61 66.7l15 24.2H14zM31.9 62L45 40.9l13.7 22-5.6 8.3-7.5-8.9-7.6 8.9-6.1-9.2zm34-12.1l18.2 30.3h-10L60.6 58.5l5.3-8.6zM7.1 80.2l18.2-30.3 4.6 7.7-14 22.6H7.1z'
      />
    </svg>
  );
}

export function SVGcontact({ color }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 90 79.2'>
      <SVGGradient color={color} />
      <path
        className={`icon-bg__${color}`}
        d='M47.1 0H23.4C10.5 0 0 10.5 0 23.4v6.3c0 10.1 6.4 19 15.9 22.2l.3.1-.2.3c-1.3 2.2-2.9 5.5-5.2 10.4-.4.8-.2 1.7.4 2.3.4.4.9.6 1.4.6.3 0 .6-.1.8-.2l26.7-12.2h6.8c12.9 0 23.4-10.5 23.4-23.4v-6.3C70.5 10.5 60 0 47.1 0zM17.3 58.6c1.6-3.1 2.8-5.3 3.3-6 .5-.3.9-.9 1-1.5.1-1.1-.6-2.1-1.7-2.2-9.3-1.6-16-9.7-16-19.1v-6.3C4 12.7 12.7 4 23.4 4h23.7c10.7 0 19.4 8.7 19.4 19.4v6.3c0 10.7-8.7 19.4-19.4 19.4h-7.2c-.3 0-.6.1-.8.2L17 59.3l.3-.7z'
      />
      <path
        className={`icon-bg__${color}`}
        d='M70.7 14c.6 1.4 1 2.9 1.3 4.5 8.3 2.4 14 9.9 14 18.6v6.3c0 9.4-6.7 17.5-16 19.1-1.1.2-1.8 1.2-1.7 2.2.1.6.4 1.1 1 1.5l.1.1c.6.7 1.8 2.9 3.3 6l.3.7-22-10.1c-.3-.1-.6-.2-.8-.2H43c-4 0-7.8-1.2-11.1-3.6L27.7 61c4.2 3.7 9.7 5.7 15.3 5.7h6.8L76.4 79c.3.1.5.2.8.2.5 0 1.1-.2 1.4-.6.6-.6.8-1.5.4-2.3-2.2-4.8-3.9-8.2-5.2-10.4l-.2-.3.3-.1C83.6 62.3 90 53.4 90 43.3V37c0-11.3-8.1-21-19.3-23zM17.3 22.3c-2.7 0-4.8 2.2-4.8 4.8 0 2.7 2.2 4.8 4.8 4.8s4.8-2.2 4.8-4.8-2.1-4.8-4.8-4.8z'
      />
      <path
        className={`icon-bg__${color}`}
        d='M53.2 22.3c-2.7 0-4.8 2.2-4.8 4.8 0 2.7 2.2 4.8 4.8 4.8 2.7 0 4.8-2.2 4.8-4.8s-2.2-4.8-4.8-4.8zM35.2 22.3c-2.7 0-4.8 2.2-4.8 4.8 0 2.7 2.2 4.8 4.8 4.8s4.8-2.2 4.8-4.8c.1-2.7-2.1-4.8-4.8-4.8z'
      />
    </svg>
  );
}

export function SVGportfolio({ color }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480'>
      <SVGGradient color={color} />
      <path
        className={`icon-bg__${color}`}
        d='M13.7 242.3c-3.1-3.1-8.2-3.1-11.3 0C.8 243.8 0 245.9 0 248v224c0 4.4 3.6 8 8 8h224c4.4 0 8-3.6 8-8 0-2.1-.8-4.2-2.3-5.7l-224-224zM16 464V267.3L212.7 464H16z'
      />
      <path
        className={`icon-bg__${color}`}
        d='M56 432h64c4.4 0 8-3.6 8-8 0-2.1-.8-4.2-2.3-5.7l-64-64c-3.1-3.1-8.2-3.1-11.3 0-1.5 1.5-2.3 3.5-2.3 5.7v64c-.1 4.4 3.5 8 7.9 8zm8-52.7l36.7 36.7H64v-36.7zM88 32h16v16H88zM120 32h16v16h-16zM152 32h16v16h-16zM164.8 144.7c-2.9 1.3-4.8 4.1-4.8 7.3v88c0 3.2 1.9 6 4.8 7.3l72 32c2.1.9 4.4.9 6.5 0l72-32c2.9-1.3 4.7-4.1 4.7-7.3v-88c0-3.2-1.8-6-4.8-7.3l-72-32c-2.1-.9-4.4-.9-6.5 0l-71.9 32zm67.2 115l-56-24.9v-70.5l56 24.9v70.5zm72-24.9l-56 24.9v-70.5l56-24.9v70.5zm-64-106l52.3 23.2-52.3 23.2-52.3-23.2 52.3-23.2zM232 304h16v40h-16zM232 56h16v40h-16zM100.546 135.156l6.896-14.438 33.48 15.99-6.897 14.439zM339.08 136.775l33.48-15.99 6.895 14.439-33.479 15.99zM100.552 264.77l33.476-15.99 6.896 14.437-33.476 15.99z'
      />
      <path
        className={`icon-bg__${color}`}
        d='M472 368h-48V243.3l47-47c12-12 12-31.4 0-43.3-12-12-31.4-12-43.3 0l-3.7 3.7V88c0-2.1-.8-4.2-2.3-5.7l-80-80C340.2.8 338.1 0 336 0H88C70.3 0 56 14.3 56 32v232h16V32c0-8.8 7.2-16 16-16h240v48c0 17.7 14.3 32 32 32h48v76.7L282.3 298.3c-1.1 1.1-1.9 2.5-2.2 4.1l-8 40c-.9 4.3 1.9 8.5 6.3 9.4 1 .2 2.1.2 3.1 0l40-8c1.5-.3 3-1.1 4.1-2.2l82.3-82.3V368H248c-4.4 0-8 3.6-8 8v24h-40v16h40v24c0 4.4 3.6 8 8 8h224c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM344 64V27.3L396.7 80H360c-8.8 0-16-7.2-16-16zm-44.7 240L424 179.3l20.7 20.7L320 324.7 299.3 304zm150.1-144c8.1 0 14.6 6.6 14.6 14.6 0 3.9-1.5 7.6-4.3 10.3l-3.7 3.7-20.7-20.6 3.7-3.7c2.8-2.8 6.5-4.3 10.4-4.3zM292.9 320.2l10.9 10.9-13.6 2.7 2.7-13.6zM464 432H256v-48h16v16h16v-16h16v16h16v-16h16v16h16v-16h16v16h16v-16h16v16h16v-16h16v16h16v-16h16v48z'
      />
    </svg>
  );
}

export function SVGskill({ color }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 88.6 89.6'>
      <SVGGradient color={color} />
      <path
        className={`icon-bg__${color}`}
        d='M88.6 37.1c-.1-.4-.3-.8-.7-1l-13.4-8.7-.8-15.9c0-.8-.8-1.4-1.6-1.4H72l-15.8 2L45.4.5c-.6-.6-1.6-.6-2.1 0l-11 11.6-15.8-2c-.8-.1-1.5.5-1.6 1.3v.1l-.8 15.9L.7 36.2c-.7.4-.9 1.4-.4 2 0 0 0 .1.1.1l8.5 11.3c0 1.1.2 2.2.5 3.3.2 1 .6 2 1 2.9L2 64.2c-.7.7-.7 1.7 0 2.4l22.6 22.6c.7.6 1.7.6 2.4 0l8.9-8.9c.3.1.5.2.8.2 1.7.5 3.5.7 5.3.6 1.3 0 2.5-.2 3.8-.6l12.9 6.6c.2.1.4.2.7.2.2 0 .3 0 .5-.1.4-.1.7-.4.8-.8l6.2-14.7 15.5-3.6c.8-.2 1.3-1 1.1-1.8v-.1L78.7 51l9.6-12.7c.2-.4.3-.8.3-1.2zM43.3 62.6c-3.7-.1-6.8-3-7.2-6.7l22.1-22 6.9 6.9-21.8 21.8zm23.8-19c2.8 4.8 2.1 10.9-1.7 15L52.1 71.9c-3.5-.3-6.3-3.1-6.7-6.7l21.7-21.6zM40 47.3c-.3-3.4-2.5-6.4-5.6-7.7l14.7-14.8 6.7 6.7L40 47.3zm-9-9.1l-9.5-3.9 9.8-9.7c4.1-3.9 10.2-4.6 15.1-1.7L31 38.2zm1.9 4.4c2.9 1.7 3.8 5.4 2.1 8.2-1.3 2.3-4 3.4-6.6 2.8L12.2 47c.3-2.4 1.4-4.6 3-6.4.1-.2 3.7-3.8 3.7-3.8l14 5.8zM36 76.8c-.6-.3-1.4-.1-1.8.4l-8.4 8.4L8.9 68.7l-3.4-3.4 4.4-4.4 3.6-3.6c.5-.5.6-1.3.3-2-.5-1-1-2-1.3-3.1l-.3-1.5 14.9 6.1c1.8.7 3.8.9 5.7.4.8 4.6 4.6 8.2 9.2 8.8.5 4.1 3.3 7.5 7.1 8.8-1.1 1-2.5 1.8-3.9 2.3-1.1.4-2.3.6-3.5.7-1.9.1-3.8-.3-5.7-1zm39.9-27c-.3.4-.4.9-.2 1.3l4.4 14.5L65.4 69c-.5.1-.8.4-1 .9l-5.9 13.9-9.4-4.8c1.1-.6 2.1-1.4 3-2.3L67.8 61c6.1-6.2 5.9-16.4-.6-22.9L51.9 22.8c-6.5-6.5-16.8-6.8-22.9-.6L13.2 37.9c-2 2-3.4 4.5-4.1 7.3l-5.6-7.4 12.7-8.2c.4-.3.6-.7.6-1.2l.8-15.1 15 1.8c.5.1.9-.1 1.3-.5l10.4-11 10.3 11c.3.3.8.5 1.3.5l15-1.8.8 15.1c0 .5.3.9.7 1.2L85 37.7l-9.1 12.1z'
      />
    </svg>
  );
}

export function SVGexperience({ color }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 90'>
      <SVGGradient color={color} />
      <path
        className={`icon-bg__${color}`}
        d='M33.4 69.4c.7.3 1.3.5 1.9.5.9 0 1.7-.4 2.3-1 .5-.5.9-1.5.7-3.1l-.7-4.3 3.2-3.1c1.1-1.1 1.5-2.4 1.1-3.6-.4-1.2-1.5-2-3-2.2l-4.4-.6-2-3.9c-.7-1.4-1.8-2.2-3-2.2-1.3 0-2.4.8-3 2.2l-2 3.9-4.4.6c-1.5.2-2.6 1-3 2.2-.4 1.2 0 2.5 1.1 3.6l3.2 3.1-.7 4.3c-.3 1.5.2 2.5.7 3.1 1 1.1 2.6 1.4 4.2.5l3.9-2 3.9 2zm-8.6-4.1l.9-5.2-3.8-3.7 5.2-.8 2.3-4.7 2.3 4.7 5.2.8-3.8 3.7.9 5.2-4.7-2.4-4.5 2.4zM18.8 42l-.6-3.8 2.6-2.7c1-1 1.4-2.3 1-3.4-.4-1.1-1.4-1.9-2.8-2.1l-3.6-.5-1.5-3.5c-.9-1.9-2.3-2.1-2.9-2.1-.6 0-2 .2-2.9 2.1l-1.6 3.4-3.6.6c-1.4.2-2.4 1-2.8 2.1-.4 1.1 0 2.4 1 3.4l2.6 2.7-.5 3.8c-.2 1.5.2 2.4.7 2.9.9 1.1 2.5 1.3 4 .5l3.2-1.8 3.2 1.8c.6.3 1.2.5 1.8.5.9 0 1.6-.3 2.2-1 .3-.5.8-1.4.5-2.9zm-4.9-5.2l.7 4.3-3.6-2-3.6 2 .7-4.3L5 33.7l4.2-.6 1.8-3.8 1.8 3.8 4.2.6-3.1 3.1zM107.9 52.7l-4.4-.6-2-3.9c-.7-1.4-1.8-2.2-3-2.2-1.3 0-2.4.8-3 2.2l-2 3.9-4.4.6c-1.5.2-2.6 1-3 2.2-.4 1.2 0 2.5 1.1 3.6l3.2 3.1-.7 4.3c-.3 1.5.2 2.5.7 3.1 1 1.1 2.6 1.4 4.2.5l3.9-2 3.9 2c.7.3 1.3.5 1.9.5.9 0 1.7-.4 2.3-1 .5-.5.9-1.5.7-3.1l-.7-4.3 3.2-3.1c1.1-1.1 1.5-2.4 1.1-3.6-.4-1.2-1.5-2-3-2.2zm-5.6 7.4l.9 5.2-4.7-2.4-4.7 2.4.9-5.2-3.8-3.7 5.2-.8 2.3-4.7 2.3 4.7 5.2.8-3.6 3.7zM127.9 32.1c-.4-1.1-1.4-1.9-2.8-2.1l-3.6-.5-1.6-3.4c-.9-1.9-2.3-2.1-2.9-2.1-.6 0-2 .2-2.9 2.1l-1.6 3.4-3.6.5c-1.4.2-2.4 1-2.8 2.1-.4 1.1 0 2.4 1 3.4l2.6 2.7-.6 3.8c-.2 1.5.2 2.4.7 2.9.9 1.1 2.5 1.3 4 .5l3.2-1.8 3.2 1.8c.6.3 1.2.5 1.8.5.9 0 1.6-.3 2.2-1 .4-.5.9-1.4.7-2.9l-.6-3.8 2.6-2.7c1-1 1.3-2.3 1-3.4zm-8 4.7l.7 4.3-3.6-2-3.6 2 .7-4.3-3.1-3.1 4.2-.6 1.8-3.8 1.8 3.8 4.2.6-3.1 3.1zM64 34.9c9.4 0 17-7.6 17-17S73.4.9 64 .9s-17 7.6-17 17 7.6 17 17 17zm0-30c7.2 0 13 5.8 13 13s-5.8 13-13 13-13-5.8-13-13c0-7.1 5.8-13 13-13zM75.2 77.2l5.3-5.4c1.4-1.4 1.9-3 1.4-4.5-.6-1.3-1.9-2.3-3.8-2.6l-7.2-1.1-3.2-6.9c-1.2-2.5-3-2.8-3.7-2.8-.7 0-2.5.3-3.7 2.8l-3.2 6.9-7.2 1.1c-1.9.3-3.2 1.3-3.7 2.7-.5 1.4 0 3.1 1.4 4.5l5.3 5.4-1.2 7.6c-.3 2 .3 3.3.8 3.9 1.2 1.4 3.2 1.6 5.2.5l6.4-3.5 6.4 3.5c.9.5 1.7.7 2.5.7 1.1 0 2-.4 2.7-1.2.6-.7 1.2-1.9.8-3.9l-1.3-7.7zm-2.7 8.3v.3c-.1 0-.1-.1-.2-.1L64 81.1l-8.3 4.6c-.1 0-.1.1-.2.1v-.3l1.6-9.6-6.7-6.9-.3-.3c.1 0 .2 0 .3-.1l9.3-1.4 4.1-8.8c0-.1.1-.1.1-.2 0 .1.1.1.1.2l4.1 8.8 9.3 1.4c.1 0 .2 0 .3.1l-.3.3-6.7 6.8 1.8 9.7zM36.8 47.6c1.1-1.9 2.3-3.6 3.8-5.1 3.2-3.3 7.4-5.5 12.5-6.7-1.4-.9-2.7-1.9-3.9-3.1C42.3 35 37.5 39 34.3 43.9c.7.7 1.3 1.5 1.8 2.4l.7 1.3zM33.2 74.8c-.7 0-1.2-.5-1.2-1v-.6c-.2-.1-.3-.1-.5-.2l-2.1-1.1-1.4.8V74c.1 2.7 2.4 4.9 5.2 4.9h15.3v-.2l-3.7-3.8H33.2zM74.7 35.9c5 1.3 9.1 3.5 12.3 6.7 1.5 1.5 2.8 3.3 4 5.4l.9-1.7c.4-.8.9-1.5 1.5-2.1-3.2-4.9-7.9-9-14.7-11.3-1.2 1.2-2.5 2.2-4 3zM96.4 73c-.2.1-.3.1-.5.2v.7c0 .4-.5.9-1.2.9H83.2l-3.7 3.8v.2h15.3c2.7 0 5.1-2.2 5.2-4.9v-1.3l-1.5-.8-2.1 1.2z'
      />
    </svg>
  );
}

export function SVGpopcorn({ color }) {
  return (
    <svg
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      x='0'
      y='0'
      viewBox='0 0 36.4 64'
    >
      <SVGGradient color={color} />
      <path
        className={`icon-bg__${color}`}
        d='M26.5 17.1c.7 0 1.3-.2 1.8-.7.1-.1.2-.3.3-.4 1.6-.2 2.7-1.6 2.6-3.2-.2-1.6-1.6-2.8-3.2-2.6-.6.1-1.2.3-1.7.8-.3.3-.5.6-.7 1-.3.1-.7.3-.9.6-1.1 1-1.1 2.7-.1 3.7.4.5 1.1.8 1.9.8zm-1-3.6c.2-.2.4-.3.7-.3.2 0 .4-.2.5-.5.2-.9 1.1-1.4 2-1.1s1.4 1.1 1.1 2c-.1.3-.2.6-.5.8-.3.3-.7.4-1.1.4-.2 0-.5.1-.6.4-.3.7-1.1.9-1.8.6s-.9-1.1-.6-1.8c.1-.3.2-.4.3-.5zM7.4 12.2c1.5 0 2.8-1.2 2.8-2.8S8.9 6.7 7.4 6.7 4.6 7.9 4.6 9.4s1.3 2.8 2.8 2.8zm0-4.2c.8 0 1.4.6 1.4 1.5s-.6 1.4-1.5 1.4c-.8 0-1.4-.6-1.4-1.5 0-.8.7-1.4 1.5-1.4zM16.6 4.6c1.3 0 2.3-1 2.3-2.3S17.8 0 16.5 0c-1.3 0-2.3 1-2.3 2.3s1.1 2.3 2.4 2.3zm0-3.3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM36.4 30.4c0-1.6-1.2-2.9-2.7-3.1-.2-1.7-1.7-2.9-3.4-2.7h-.2c-.6-2.3-3.3-3.8-4.7-3.9-.4-1.7-1.8-3-3.6-3.1-.3-2-2.2-3.3-4.2-2.9-1.5.3-2.7 1.4-2.9 2.9-1.8.1-3.2 1.4-3.6 3.1-1.4.1-4.1 1.6-4.7 3.9-1.7-.3-3.3.8-3.6 2.5v.2c-1.6.2-2.8 1.5-2.8 3.1 0 .6.2 1.2.5 1.6v.3l5.9 28.5c.1.2.2.4.5.5L18 64H18.3l11.2-2.7c.2-.1.4-.3.5-.5l5.9-28.5V32c.3-.4.5-1 .5-1.6zM3.3 28.6c.4 0 .7-.2.7-.6v-.1-.2c0-1 .8-1.8 1.8-1.8h.3c.2.1 1.3.5 1.4 1.3.1.3.3.5.6.5s.5-.2.6-.5c.3-1 1.4-1.6 2.4-1.4.4 0 .7-.2.7-.6 0-.3-.2-.6-.5-.7-1.2-.2-2.4.2-3.2 1.1-.2-.2-.4-.4-.6-.5.2-1.9 2.8-3.2 3.6-3.2h.2c.3 0 .7-.2.7-.5.1-1.5 1.4-2.6 2.8-2.6h.2c.2 0 .4-.1.5-.2.1-.1.2-.3.2-.5 0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3c0 .4.3.7.6.7H21.2c1.2 0 2.3.8 2.7 2-.6.2-1.1.5-1.6 1-.5-.5-1.1-.9-1.8-1.1-.4-.1-.7.1-.8.5-.1.3.1.6.4.8 0 0 1.3.4 1.5 1.4.1.3.3.5.6.5s.6-.2.6-.5c.3-1.1 1.4-1.7 2.5-1.4 1 .3 3 1.5 3.2 3.1-.7.4-1.1 1.1-1.3 1.9-.1.4.2.7.5.8h.2c.3 0 .6-.2.6-.5.1-.8 1-1.2 1.3-1.3.1 0 .3-.1.5-.1 1 0 1.8.8 1.8 1.8v.2c0 .4.2.7.6.7h.2c1-.1 1.9.6 2 1.6v.2c0 1-.8 1.8-1.8 1.8-.2 0-.3 0-.5-.1-.3-.1-.6.1-.8.4-.2.5-.7.9-1.3 1.1-.1 0-.3 0-.4.1H30c-.4.1-.8 0-1.2-.2-.3-.2-.6-.1-.8.1-.6.6-1.5.7-2.2.3-.3-.2-.7 0-.9.3 0 .1 0 .1-.1.2-.1.5-.4.9-.8 1.2-.6.3-1.3.3-1.9 0-.2-.1-.5-.1-.7 0-1 .9-2.3 1.4-3.6 1.3-1 0-2-.3-2.8-.8.4-.5.7-1.1.8-1.7 1.3.4 2.8.1 3.8-.9.3-.3.3-.7 0-.9s-.7-.3-.9 0c-.9.8-2.1.9-3.1.3-.3-.2-.7-.1-.9.2.3-.2.3 0 .3.1 0 .9-.4 1.7-1.1 2.2-.6.3-1.3.3-1.8-.1-.4-.3-.7-.7-.8-1.2-.1-.4-.4-.6-.8-.5-.1 0-.2 0-.2.1-.7.4-1.6.3-2.2-.3-.2-.2-.5-.2-.8-.1-.3.2-.7.3-1.1.3H6c-.1-.1-.3-.1-.4-.1-.6-.1-1.1-.5-1.3-1.1-.1-.3-.5-.4-.8-.4-.9.3-1.9-.3-2.2-1.2 0-.2-.1-.3-.1-.5 0-1 .8-1.8 1.8-1.8.2.1.2.1.3.1zm7.7 7.6l2.6 25.4-2.4-.6-4.7-26.1c.3 0 .6-.1.9-.3.8.5 1.8.7 2.7.5.2.4.5.8.9 1.1zm1.4.7c.2 0 .4.1.6.1.3 0 .5 0 .8-.1h.2l.2-.1c.9.7 2.1 1.2 3.3 1.3v24.5l-2.5-.7-2.6-25zm6.4 1.1c1.2-.1 2.3-.5 3.3-1.3.6.3 1.2.3 1.9.2L21.4 62l-2.5.6V38zm6.5-1.8c.4-.3.7-.7.8-1.1.9.2 1.9.1 2.7-.5l.9.3L25.2 61l-2.5.6 2.6-25.4zM2 33.3c.4.2.9.2 1.4.2.4.6 1.1 1.1 1.8 1.3l4.6 25.9-2.3-.5L2 33.3zm26.8 26.9l-2.3.5 4.6-25.9c.7-.2 1.4-.7 1.8-1.3.5 0 .9 0 1.4-.2l-5.5 26.9z'
      />
    </svg>
  );
}

export function SVGresponsive({ color }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 77.2 67.1'>
      <SVGGradient color={color} />
      <path
        className={`icon-bg__${color}`}
        d='M33.8 48.2c1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4-3.4 1.5-3.4 3.4 1.5 3.4 3.4 3.4zm0-4.8c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4z'
      />
      <path
        className={`icon-bg__${color}`}
        d='M72.9 15.6h-5.3V4.8c0-2.6-2.2-4.8-4.8-4.8h-58C2.2 0 0 2.2 0 4.8v41.7c0 2.6 2.2 4.8 4.8 4.8h17.7v2.6h-3.9c-2.7 0-4.9 2.2-4.9 4.9v.9c0 .6.4 1 1 1h25.8v2.2c0 2.3 1.9 4.2 4.2 4.2H73c2.3 0 4.2-1.9 4.2-4.2V19.8c0-2.3-1.9-4.2-4.3-4.2zM40.4 58.7H15.6c.1-1.6 1.4-2.8 2.9-2.8h21.8v2.8zm0-4.8H24.5v-2.6h15.9v2.6zm0-4.6H4.8C3.3 49.3 2 48 2 46.5v-5.8h38.4v8.6zm0-29.5v18.8H2V4.8C2 3.3 3.3 2 4.8 2h58c1.5 0 2.8 1.3 2.8 2.8v10.7h-21c-2.3.1-4.2 2-4.2 4.3zm34.8 43.1c0 1.2-1 2.2-2.2 2.2H44.6c-1.2 0-2.2-1-2.2-2.2V19.8c0-1.2 1-2.2 2.2-2.2h28.3c1.2 0 2.2 1 2.2 2.2v43.1z'
      />
      <path
        className={`icon-bg__${color}`}
        d='M72.6 19.8H44.9c-.6 0-1 .4-1 1V59c0 .6.4 1 1 1h27.7c.6 0 1-.4 1-1V20.8c0-.6-.4-1-1-1zm-1 38.1H45.9V21.8h25.7v36.1z'
      />
    </svg>
  );
}

export function SVGeducation({ color }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 22'>
      <SVGGradient color={color} />
      <path
        className={`icon-bg__${color}`}
        d='M10.8 14c.5 0 .7-.1 1-.2.1 0 .1-.1.2-.1s.1 0 .2.1c.2.1.5.2 1 .2C16 14 18 10.2 18 7.6c0-2.5-1.2-4.2-2.9-4.5.5-.7.9-1.5.9-2.6 0-.3-.2-.5-.5-.5-1.3 0-2.5.6-3.3 1.7-.2-.6-.5-1-.8-1.5-.1-.2-.4-.3-.7-.1-.2.1-.3.5-.2.7.5.8.8 1.3.9 2.7-.1 0-.2-.1-.3-.1-.3-.2-.9-.4-1.5-.4C7.4 3 6 4.9 6 7.6c0 2.6 2 6.4 4.8 6.4zM15 1c-.2 1-.8 1.7-1.6 2.1-.2.1-.4.1-.6.2-.1 0-.1 0-.2.1.2-1.3 1.2-2.2 2.4-2.4zM9.6 4c.5 0 .9.2 1.3.3.4.1.8.3 1.2.3.4 0 .8-.1 1.2-.3h.1c.1 0 .2-.1.4-.1.1-.1.3-.2.6-.2C16 4 17 5.5 17 7.6c0 2.4-1.8 5.4-3.8 5.4-.3 0-.4 0-.5-.1-.1-.1-.3-.2-.7-.2h-.1c-.3 0-.5.1-.6.2-.1.1-.2.1-.5.1-2 0-3.8-3-3.8-5.4C7 5.5 8 4 9.6 4zm14.3 17.3c0-.1 0-.1 0 0l-.1-.1s-.1 0-.1-.1h-.1-.1c-.2-.2-.6-1.5-.6-2.5s.4-2.3.6-2.5h.2s.1 0 .1-.1h.1s0-.1.1-.1v-.1-.2c0-.3-.2-.5-.5-.5h-21C1.1 15 0 16.1 0 17.5v2C0 20.9 1.1 22 2.5 22h21c.3 0 .5-.2.5-.5 0-.1 0-.1-.1-.2.1 0 0 0 0 0zM2.5 18H22v1H2.5c-.3 0-.5.2-.5.5s.2.5.5.5h19.7c.1.3.2.7.3 1h-20c-.8 0-1.5-.7-1.5-1.5v-2c0-.8.7-1.5 1.5-1.5h20c-.1.3-.2.7-.3 1H2.5c-.3 0-.5.2-.5.5s.2.5.5.5z'
      />
    </svg>
  );
}

export function SVGwork({ color }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 76.7 75.8'>
      <SVGGradient color={color} />
      <path
        className={`icon-bg__${color}`}
        d='M17.8 20.7L4.1 34.4C-1.4 40-1.4 49 4.1 54.5l2.3 2.3-2.8 2.8C0 63.3-.1 69.3 3.6 73c3.7 3.7 9.6 3.7 13.4.1l.1-.1 2.8-2.8 3.9 3.9c1 .9 2.3 1.4 3.7 1.4 1.9 0 3.7-.7 5-2 .9-.9 1.6-2.1 1.8-3.4.4.1.8.1 1.2.1 1.9 0 3.7-.7 5-2 1-1 1.6-2.2 1.8-3.5 2.2.5 4.5-.2 6.1-1.8 1-1 1.6-2.2 1.8-3.5 3.5.8 7.1-1.4 7.9-4.9.5-2.2-.1-4.6-1.8-6.2L49 41l2.9-2.9c1.7.5 3.5.8 5.3.8 10.7-.1 19.3-8.7 19.5-19.4 0-2.7-.6-5.3-1.7-7.8l-1.1-2.5c-.4-1-1.6-1.5-2.6-1.1-.2.1-.4.2-.6.4L59.9 19.3c-.6.7-1.7.8-2.4.2-.1 0-.1-.1-.2-.2-.7-.6-.8-1.7-.2-2.4l.2-.2L68.1 6c.8-.8.8-2 0-2.8-.2-.2-.4-.3-.6-.4L65 1.7C62.5.6 59.9 0 57.2 0 46.5.1 37.9 8.8 37.8 19.4v1.2c-5.6-5.4-14.5-5.4-20 .1zm-3.6 49.5c-2 2.1-5.3 2.2-7.4.3l-.3-.3c-2.1-2-2.2-5.3-.2-7.5.1-.1.1-.2.2-.2l2.8-2.8 2.7 2.7 5 5-2.8 2.8zM57.2 4c2 0 4.1.5 5.9 1.3l-8.6 8.6c-2.2 2.3-2.2 6 .1 8.2 2.3 2.2 5.9 2.2 8.1 0l8.6-8.6c.8 1.9 1.3 3.9 1.3 5.9-.1 8.5-6.9 15.3-15.4 15.5-1.8 0-3.5-.4-5.1-1-.7-.3-1.6-.1-2.1.5l-3.8 3.7-7.7-7.7 3.8-3.8c.6-.6.7-1.4.5-2.1-.6-1.6-1-3.4-1-5.1.1-8.4 7-15.3 15.4-15.4zM37.4 25.9l-1.7 1.7-.4-.4c-.8-.8-2-.8-2.8 0s-.8 2 0 2.8l21 21c1 1 1 2.7-.1 3.7-1 1-2.6 1-3.6 0L48 52.9c-1.1-.5-2.3-.1-2.9 1-.4.8-.2 1.8.4 2.4 1 1 1.1 2.6.1 3.7-1 1-2.6 1.1-3.7.1l-.1-.1-1.8-1.8c-1.1-.5-2.3-.1-2.9 1-.3.8-.1 1.8.5 2.5 1 1 1 2.7 0 3.7-.8.8-2 1.1-3 .7l-2.5-2.5c-1.1-.5-2.3-.1-2.9 1-.4.8-.2 1.8.4 2.4 1 1 1 2.7 0 3.7-.8.8-2 1.1-3 .7L18.2 63 7 51.7c-4-4-4-10.4 0-14.4l13.7-13.7c4-4 10.4-4 14.4 0l2.3 2.3z'
      />
    </svg>
  );
}

export function SVGstars({ color }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 77 77'>
      <SVGGradient color={color} />
      <path
        className={`icon-bg__${color}`}
        d='M23.1 26c-.1.4 0 .8.3 1L34 37.4 31.5 52c-.1.4.1.8.4 1 .3.2.7.3 1.1.1l13-7L59.1 53c.1.1.3.1.5.1s.4-.1.6-.2c.3-.2.5-.6.4-1L58 37.4 68.6 27c.3-.3.4-.7.3-1-.1-.4-.4-.6-.8-.7l-14.6-2.1L46.9 10c-.3-.7-1.5-.7-1.8 0l-6.5 13.3L24 25.4c-.4 0-.8.3-.9.6zm16.3-.9c.3 0 .6-.3.8-.5L46 12.7l5.9 11.9c.1.3.4.5.8.5L65.8 27l-9.5 9.3c-.2.2-.3.6-.3.9l2.2 13.1-11.8-6.2c-.1-.1-.2-.1-.4-.1s-.3 0-.5.1l-11.8 6.2L36 37.2c.1-.3-.1-.7-.3-.9L26.2 27l13.2-1.9zM5.8 21.7l-.7 4.1c-.1.4.1.8.4 1 .3.2.7.2 1 0l3.7-1.9 3.7 1.9c.1.1.3.1.5.1s.4-.1.6-.2c.3-.2.5-.6.4-1l-.7-4.1 3-2.9c.3-.3.4-.7.3-1-.1-.4-.4-.6-.8-.7l-4.2-.5-1.8-3.7c-.3-.7-1.5-.7-1.8 0l-1.8 3.7-4.1.6c-.4.1-.7.3-.8.7s0 .8.3 1l2.8 2.9zm2.5-3.3c.3 0 .6-.3.8-.5l1.2-2.4 1.2 2.4c.1.3.4.5.8.5l2.6.4-1.9 1.9c-.2.2-.3.6-.3.9l.5 2.6-2.4-1.2c-.3-.2-.6-.2-.9 0l-2.4 1.2.5-2.6c.1-.3-.1-.7-.3-.9l-1.9-1.9 2.5-.4zM25.8 9.5l-.7 4.1c-.1.4.1.8.4 1 .3.2.7.3 1.1.1l3.7-1.9 3.7 1.9c.1.1.3.1.5.1s.4-.1.6-.2c.3-.2.5-.6.4-1l-.7-4.1 3-2.9c.3-.3.4-.7.3-1-.1-.4-.4-.6-.8-.7L33 4.3 31.2.6c-.3-.7-1.5-.7-1.8 0l-1.8 3.7-4.1.6c-.4.1-.7.3-.8.7-.1.4 0 .8.3 1l2.8 2.9zm2.5-3.3c.3 0 .6-.3.8-.5l1.2-2.4 1.2 2.4c.1.3.4.5.8.5l2.6.4L33 8.5c-.2.2-.3.6-.3.9l.5 2.6-2.4-1.2c-.3-.2-.6-.2-.9 0L27.5 12l.5-2.6c.1-.3-.1-.7-.3-.9l-1.9-1.9 2.5-.4zM63.6 64.6l-4.1-.6-1.8-3.7c-.3-.7-1.5-.7-1.8 0L54 64l-4.1.6c-.4.1-.7.3-.8.7-.1.4 0 .8.3 1l3 2.9-.7 4.1c-.1.4.1.8.4 1 .2.1.4.2.6.2.2 0 .3 0 .5-.1l3.7-1.9 3.7 1.9c.3.2.7.1 1.1-.1.3-.2.5-.6.4-1l-.7-4.1 3-2.9c.3-.3.4-.7.3-1s-.7-.7-1.1-.7zm-4.2 3.5c-.2.2-.3.6-.3.9l.5 2.6-2.4-1.2c-.1-.1-.3-.1-.5-.1s-.3 0-.5.1l-2.4 1.2.5-2.6c.1-.3-.1-.7-.3-.9l-1.9-1.9 2.6-.4c.3 0 .6-.3.8-.5l1.2-2.4 1.2 2.4c.1.3.4.5.8.5l2.6.4-1.9 1.9z'
      />
      <path
        className={`icon-bg__${color}`}
        d='M76.1 39.6L72 39l-1.8-3.7c-.3-.7-1.5-.7-1.8 0L66.5 39l-4.1.6c-.4.1-.7.3-.8.7-.1.4 0 .8.3 1l3 2.9-.7 4.1c-.1.4.1.8.4 1 .2.1.4.2.6.2.2 0 .3 0 .5-.1l3.7-1.9 3.7 1.9c.3.2.7.1 1.1-.1.3-.2.5-.6.4-1l-.7-4.1 3-2.9c.3-.3.4-.7.3-1s-.7-.7-1.1-.7zm-4.2 3.5c-.2.2-.3.6-.3.9l.5 2.6-2.4-1.2c-.1-.1-.3-.1-.5-.1s-.3 0-.5.1l-2.4 1.2.5-2.6c.1-.3-.1-.7-.3-.9l-1.9-1.9 2.6-.4c.3 0 .6-.3.8-.5l1.2-2.4 1.2 2.4c.1.3.4.5.8.5l2.6.4-1.9 1.9zM58.3 14.2l-.7 4.1c-.1.4.1.8.4 1 .3.2.7.3 1.1.1l3.7-1.9 3.7 1.9c.1.1.3.1.5.1s.4-.1.6-.2c.3-.2.5-.6.4-1l-.7-4.1 3-2.9c.3-.3.4-.7.3-1-.1-.4-.4-.6-.8-.7L65.5 9l-1.8-3.7c-.3-.7-1.5-.7-1.8 0L60 9l-4.1.6c-.4.1-.7.3-.8.7s0 .8.3 1l2.9 2.9zm2.5-3.3c.3 0 .6-.3.8-.5L62.8 8l1.2 2.4c.1.3.4.5.8.5l2.6.4-1.9 1.9c-.2.2-.3.6-.3.9l.5 2.6-2.4-1.2c-.3-.2-.6-.2-.9 0L60 16.7l.5-2.6c.1-.3-.1-.7-.3-.9l-1.9-1.9 2.5-.4zM34.5 58.2c-.2-.5-.7-.8-1.2-.7-2.7.8-21.7 6.8-29.7 13.3C9.1 60.3 28.7 49.5 29 49.3c.5-.3.7-.9.4-1.4-.3-.5-.9-.7-1.4-.4-.9.6-18.4 10.2-25.3 20.7 4-20.7 23.4-28.7 23.6-28.8.5-.2.8-.8.6-1.3-.2-.5-.8-.8-1.3-.6C25.4 37.6 0 48.1 0 76c0 .6.4 1 1 1s1-.4 1-1c0-5 19.5-12.8 31.8-16.6.5-.2.8-.7.7-1.2z'
      />
    </svg>
  );
}

export function SVGenjoy({ color }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 385.5 510'>
      <SVGGradient color={color} />
      <path
        className={`icon-bg__${color}`}
        d='M384.5 344.1c-3.1-27.5-12.8-54.5-27.4-76.1-5.7-8.4-10.5-15.2-14.7-21.2-18.4-26-24.6-34.8-41.9-87.9-7.3-22.3-15.5-39-25.5-51.4 1-.9 1.8-1.7 2.6-2.5 10.8-10.8 28.7-36.3 26.8-85.7C304.1 9 295.7.6 285.2.1c-49.3-1.8-74.8 16-85.6 26.8-4.5 4.6-8.4 9.6-11.6 15.2-4.2-12.8-9.6-25.2-16.2-36.9-2.7-4.8-8.8-6.5-13.6-3.8-4.7 2.7-6.4 8.7-3.9 13.4 14.8 26.8 18.9 47.3 20 57.9-17.6 2.6-34.4 9.5-48.7 20.1-17.3 13-29.8 33.4-40.5 66.1-17.3 53.1-23.5 61.9-41.9 87.9-4.2 6-9 12.8-14.7 21.2C13.8 289.6 4.1 316.6 1 344.1c-3.5 31 1.7 60.4 14.8 85.3C35.4 466.2 81.7 510 191.4 510h2.8c109.7 0 156-43.9 175.5-80.6 13.1-24.9 18.3-54.4 14.8-85.3zM194.3 84.3c.2-.7.3-1.3.3-2 2.5-14.3 7.9-30 19.1-41.2 18.2-18.2 48.3-21 65-21 2.2 0 4.1 0 5.8.1.5 14.4-.4 50.2-21 70.8-20.5 20.6-56.3 21.5-70.8 20.9-.3-9.2.2-18.5 1.6-27.6zM352 420c-24.3 45.8-78.9 70-157.8 70h-2.8c-79 0-133.5-24.2-157.8-70C8.3 372.3 21.8 313.6 45 279.2c5.6-8.2 10.3-14.9 14.5-20.8 18.6-26.3 26.3-37.3 44.6-93.2 9.3-28.5 19.6-45.9 33.5-56.3 10.5-7.8 22.6-13.2 35.5-15.6-.5 6.4-.6 12.9-.3 19.3.4 10.5 8.8 18.9 19.3 19.3 2.4.1 4.7.1 7 .1 26.9 0 46.2-6 59.5-13.1 8.8 10.5 16.2 25.4 23 46.2 18.3 56 26 66.9 44.6 93.2 4.2 5.9 8.9 12.6 14.5 20.8 23.1 34.5 36.6 93.2 11.3 140.9z'
      />
      <path
        className={`icon-bg__${color}`}
        d='M237.7 383.6h-89.8c-5.5 0-10 4.5-10 10 0 30.3 24.6 54.9 54.9 54.9s54.9-24.6 54.9-54.9c0-5.5-4.5-10-10-10zM261.2 335.2c-15.2 0-27.5 12.3-27.6 27.5 0 5.5 4.5 10 10 10s10-4.5 10-10c.2-4.2 3.7-7.4 7.8-7.3 4 .1 7.1 3.3 7.3 7.3 0 5.5 4.5 10 10 10s10-4.5 10-10c0-15.1-12.3-27.5-27.5-27.5zM152 362.8c-.3-15.2-12.9-27.3-28.1-27-14.8.3-26.7 12.2-27 27 0 5.5 4.5 10 10 10s10-4.5 10-10c.2-4.2 3.7-7.4 7.8-7.3 4 .1 7.1 3.3 7.3 7.3 0 5.5 4.5 10 10 10s10-4.5 10-10z'
      />
    </svg>
  );
}

export default SVGwhoami;