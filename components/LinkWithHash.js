import React from 'react';
import Link from 'next/link';

// I couldn't find any clear answer how to deal with Links with #-hashes and PageTransitions, for example /skills#experience would only push to top of the page and not to desired #-section.

export default function LinkWithHash({ children, href }) {
  return (
    <Link href={href} scroll={false}>
      {React.cloneElement(children, {})}
      {/* <a onClick={() => checkUrl(href)} className={classname}>
        {content}
      </a> */}
    </Link>
  );
}
