import React from 'react';

import classes from './Toolbar.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <nav>
        <NavigationItems />
      </nav>
      <label className={classes.Title}>Notes</label>
    </header>
  );
};

export default Toolbar;
