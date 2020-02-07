import React, { useRef } from 'react';
import Link from 'next/link';

// const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
// General scroll to element function

export default function ScrollLink({ ref, content, classname }) {
  // const myRef = useRef(null);
  const executeScroll = () => scrollToRef(ref);

  return (
    <Link ref={ref} onClick={executeScroll}>
      <a className={classname}>{content}</a>
    </Link>
  );
}
