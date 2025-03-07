import React from 'react';

import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const Layout = (props) => {
  return (
    <>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </>
  );
};

export default Layout;
