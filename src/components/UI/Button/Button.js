import React from 'react';

import classes from './Button.module.scss';

const Button = (props) => (
  <button
    disabled={props.disabled}
    className={[
      classes.Button,
      classes[props.btnType],
      classes[props.btnSelected],
    ].join(' ')}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default Button;
