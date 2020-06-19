import React, { useState, useEffect } from 'react';

import classes from './Toast.module.scss';

const Toast = (props) => {
  const { onHide } = props;
  const [toastClasses, setToastClases] = useState([
    classes.Toast,
    classes[props.toastType],
  ]);

  const timeOut = props.timeOut ? +props.timeOut * 1000 : 1000;

  useEffect(() => {
    const id = setTimeout(() => {
      setToastClases([classes.HideToast]);
      onHide();
    }, timeOut);
    return () => clearTimeout(id);
  }, [timeOut, onHide]);

  return (
    <div className={toastClasses.join(' ')}>
      <label className={classes.Text}>{props.text}</label>
    </div>
  );
};

export default Toast;
