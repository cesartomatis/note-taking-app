import React from 'react';

import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
  return (
    <div className={classes.Options}>
      <NavigationItem icon="home" link="/" />
    </div>
  );
};

export default NavigationItems;
