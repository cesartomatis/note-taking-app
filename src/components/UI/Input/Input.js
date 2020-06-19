import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import classes from './Input.module.scss';

const Input = (props) => {
  let input = null;
  switch (props.type) {
    case 'input':
      input = (
        <input
          className={classes.Input}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      input = (
        <TextareaAutosize
          className={[classes.Input, classes.TextArea].join(' ')}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      input = (
        <input
          className={classes.Input}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
  }
  return (
    <div className={classes.Container}>
      <label className={classes.Label}>{props.label}</label>
      {input}
    </div>
  );
};

export default Input;
