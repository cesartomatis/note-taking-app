import React from 'react';

import classes from './NavigationItem.module.scss';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
  return (
    <NavLink to={props.link} exact={props.exact} className={classes.MenuLink}>
      <div className={classes.MenuItem}>
        <span className={['material-icons', classes.MenuIcon].join(' ')}>
          {props.icon}
        </span>
      </div>
    </NavLink>
  );
};

export default NavigationItem;
