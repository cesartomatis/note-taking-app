import React from 'react';

import classes from './NoteItem.module.scss';

const NoteItem = (props) => {
  return (
    <div className={classes.Container}>
      <div
        className={[classes.BtnOption, classes.BtnDelete].join(' ')}
        onClick={props.onDelete}
      >
        <span className={['material-icons', classes.Icon].join(' ')}>
          delete_forever
        </span>
      </div>
      <div className={classes.Note} onClick={props.onNote}>
        <label className={classes.Title}>{props.title}</label>
        <label className={classes.SubNote}>{props.firstpart}</label>
        <label className={classes.Date}>Last update: {props.date}</label>
      </div>
      <div
        className={[classes.BtnOption, classes.BtnEdit].join(' ')}
        onClick={props.onEdit}
      >
        <span className={['material-icons', classes.Icon].join(' ')}>
          create
        </span>
      </div>
    </div>
  );
};

export default NoteItem;
