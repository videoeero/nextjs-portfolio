import { withRouter } from 'next/router';
import React, { Children, Component } from 'react';
const ActivePage = ({ router, children, ...props }) => {
  const child = Children.only(children);

  let className = child.props.className || '';

  if (router.pathname === '/') {
    className = `${className}__plum`;
  } else if (router.pathname === '/skills') {
    console.log('skills pageeee');
    className = `${className}__blue`;
  } else if (router.pathname === '/portfolio') {
    className = `${className}__green`;
  }

  delete props.activeClassName;

  return <header {...props}>{React.cloneElement(child, { className })}</header>;
};

export default withRouter(ActivePage);
