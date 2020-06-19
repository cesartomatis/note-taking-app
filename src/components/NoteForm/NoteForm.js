import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const NoteForm = (props) => {
  return (
    <>
      <Input
        type="input"
        label="Title"
        value={props.title}
        changed={props.onTitleChanged}
      />
      <Input
        type="textarea"
        label="Note"
        value={props.note}
        changed={props.onNoteChanged}
      />
      <Button
        disabled={!props.title || !props.note}
        btnType="Neutral"
        clicked={props.onSave}
      >
        Save
      </Button>
    </>
  );
};

export default NoteForm;
