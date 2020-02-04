import React from 'react';

export function SvgGradient({ color }) {
  return (
    <linearGradient id={`icon-gradient-${color}`} x2='1' y2='0'>
      <stop offset='0%' stopColor='var(--color-1)' />
      <stop offset='100%' stopColor='var(--color-2)' />
    </linearGradient>
  );
}

export default SvgGradient;
