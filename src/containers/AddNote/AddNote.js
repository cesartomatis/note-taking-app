import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as moment from 'moment';

import classes from './AddNote.module.scss';
import NoteForm from '../../components/NoteForm/NoteForm';
import { addNote } from '../../store/actions/notes';
import Toast from '../../components/UI/Toast/Toast';

const AddNote = (props) => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [toast, setToast] = useState(null);

  const dispatch = useDispatch();
  const onAddNote = (note) => dispatch(addNote(note));

  const onTitleChangedHandler = (event) => {
    setTitle(event.target.value);
  };

  const onNoteChangedHandler = (event) => {
    setNote(event.target.value);
  };

  const onSaveHandler = () => {
    const noteToAdd = {
      title,
      note,
      date: moment.now(),
    };
    onAddNote(noteToAdd);
    setTitle('');
    setNote('');
    setToast(
      <Toast
        toastType="Success"
        timeOut="2"
        text="Note added!"
        onHide={() => setToast(null)}
      />
    );
  };

  return (
    <div className={classes.Container}>
      <h1>Add a new note</h1>
      <NoteForm
        title={title}
        note={note}
        onTitleChanged={onTitleChangedHandler}
        onNoteChanged={onNoteChangedHandler}
        onSave={onSaveHandler}
      />
      {toast}
    </div>
  );
};

export default AddNote;
