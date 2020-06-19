import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as moment from 'moment';

import classes from './ViewNote.module.scss';
import { getSelectedNote } from '../../store/actions/notes';
import Spinner from '../../components/UI/Spinner/Spinner';
import FAB from '../../components/UI/FAB/FAB';

const ViewNote = (props) => {
  const { match } = props;
  const { id } = match.params;
  const note = useSelector((state) => state.notes.selectedNote);
  console.log(note);

  const dispatch = useDispatch();
  const onGetSelectedNote = useCallback((id) => dispatch(getSelectedNote(id)), [
    dispatch,
  ]);

  useEffect(() => {
    if (!note) {
      onGetSelectedNote(id);
    }
  }, [onGetSelectedNote, note, id]);

  const onEditHandler = () => {
    props.history.push(`/edit/${id}`);
  };

  return (
    <>
      {note ? (
        <div className={classes.Note}>
          <label className={classes.Title}>{note.title}</label>
          <label className={classes.Body}>{note.note}</label>
          <label className={classes.Date}>
            Last update: {moment(note.date).format('lll')}
          </label>
          <FAB icon="create" clicked={onEditHandler} />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ViewNote;
