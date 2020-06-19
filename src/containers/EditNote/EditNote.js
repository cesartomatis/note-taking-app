import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as moment from 'moment';

import classes from './EditNote.module.scss';
import { getSelectedNote, editNote } from '../../store/actions/notes';
import NoteForm from '../../components/NoteForm/NoteForm';
import Toast from '../../components/UI/Toast/Toast';

const EditNote = (props) => {
  const { match } = props;
  const { id } = match.params;
  const note = useSelector((state) => state.notes.selectedNote);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [toast, setToast] = useState(null);

  const dispatch = useDispatch();
  const onGetSelectedNote = useCallback((id) => dispatch(getSelectedNote(id)), [
    dispatch,
  ]);
  const onEditNote = (note) => dispatch(editNote(note));

  useEffect(() => {
    if (!note) {
      onGetSelectedNote(id);
    } else {
      console.log(note);
      setTitle(note.title);
      setBody(note.note);
    }
  }, [onGetSelectedNote, note, id]);

  const onTitleChangedHandler = (event) => {
    setTitle(event.target.value);
  };

  const onNoteChangedHandler = (event) => {
    setBody(event.target.value);
  };

  const onSaveHandler = () => {
    const noteToEdit = {
      id: note.id,
      title,
      note: body,
      date: moment.now(),
    };
    onEditNote(noteToEdit);
    setToast(
      <Toast
        toastType="Success"
        timeOut="2"
        text="Note edited!"
        onHide={() => setToast(null)}
      />
    );
  };

  return (
    <div className={classes.Container}>
      <h1>Edit note</h1>
      <NoteForm
        title={title}
        note={body}
        onTitleChanged={onTitleChangedHandler}
        onNoteChanged={onNoteChangedHandler}
        onSave={onSaveHandler}
      />
      {toast}
    </div>
  );
};

export default EditNote;
