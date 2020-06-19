import React from 'react';

import classes from './FAB.module.scss';

const FAB = (props) => {
  return (
    <div className={classes.FAB} onClick={props.clicked}>
      <span className="material-icons">{props.icon}</span>
    </div>
  );
};

export default FAB;
