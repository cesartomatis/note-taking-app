import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as moment from 'moment';

import FAB from '../../components/UI/FAB/FAB';
import {
  getNotes,
  deleteNote,
  setSelectedNote,
} from '../../store/actions/notes';
import NoteItem from '../../components/NoteItem/NoteItem';
import classes from './NotesList.module.scss';
import Toast from '../../components/UI/Toast/Toast';

const NotesList = (props) => {
  const [toast, setToast] = useState(null);

  const notes = useSelector((state) => state.notes.notes);

  const dispatch = useDispatch();
  const onGetNotes = useCallback(() => dispatch(getNotes()), [dispatch]);
  const onDeleteNote = (id) => dispatch(deleteNote(id));
  const onSetNote = (note) => dispatch(setSelectedNote(note));

  useEffect(() => {
    if (!notes) {
      onGetNotes();
    }
  }, [notes, onGetNotes]);

  const onAddHandler = () => {
    props.history.push('/add');
  };

  const onDeleteNoteHandler = (id) => {
    onDeleteNote(id);
    setToast(
      <Toast
        toastType="Danger"
        timeOut="2"
        text="Note deleted!"
        onHide={() => setToast(null)}
      />
    );
  };

  const onNoteClickedHandler = (note) => {
    onSetNote(note);
    props.history.push(`/note/${note.id}`);
  };

  const onEditClickedHandler = (note) => {
    onSetNote(note);
    props.history.push(`/edit/${note.id}`);
  };

  let body = <h3>No notes</h3>;
  if (notes && notes.length > 0) {
    body = notes
      .sort((a, b) => {
        if (moment(a.date).isAfter(b.date)) {
          return -1;
        } else if (moment(a.date).isBefore(b.date)) {
          return 1;
        }
        return 0;
      })
      .map((note) => (
        <NoteItem
          key={note.id}
          title={note.title}
          date={moment(note.date).format('lll')}
          firstpart={`${note.note.substr(0, 10)}...`}
          onDelete={onDeleteNoteHandler.bind(this, note.id)}
          onNote={onNoteClickedHandler.bind(this, note)}
          onEdit={onEditClickedHandler.bind(this, note)}
        />
      ));
  }

  return (
    <div className={classes.Container}>
      {body}
      <FAB icon="add" clicked={onAddHandler} />
      {toast}
    </div>
  );
};

export default NotesList;
