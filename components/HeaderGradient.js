import { withRouter } from 'next/router';
import React, { Children, Component } from 'react';

const ActivePage = ({ router, children, ...props }) => {
  const child = Children.only(children);

  // let className = child.props.className || '';

  let className = '';

  const loopHeaders = target => {
    child.props.children.map(header => {
      if (header.ref == target) {
        const activeHeaderClass = header.props.className;
        console.log(activeHeaderClass);
        // activeHeaderClass = `${activeHeaderClass} active`;

        // className = header.className || '';
        // className = 'header__main active';
      } else {
        // const hiddenHeaderClass = header.props.className;
        // activeHeaderClass = `${activeHeaderClass}`
        // className = header.props.className || '';
        // className = 'header__main active';
      }
    });
  };

  if (router.pathname === '/') {
    const target = 'header__plum';
    loopHeaders(target);
    console.log(document.querySelector('#header__plum'));
    // className = `${className}__plum animateColorTitle__plum`;
  } else if (router.pathname === '/skills') {
    const target = 'header__blue';
    loopHeaders(target);
    // className = `${className}__blue animateColorTitle__blue`;
  } else if (router.pathname === '/portfolio') {
    const target = 'header__green';
    loopHeaders(target);
    // className = `${className}__green animateColorTitle__green`;
  }

  // delete props.activeClassName;

  return <header {...props}>{React.cloneElement(child, { className })}</header>;
};

export default withRouter(ActivePage);
