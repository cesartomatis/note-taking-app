import { v4 as uuidv4 } from 'uuid';

import * as notesService from '../../service/notes.service';
import {
  GET_NOTES_START,
  GET_NOTES_SUCCESS,
  GET_NOTES_FAIL,
  ADD_NOTE_START,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAIL,
  EDIT_NOTE_START,
  EDIT_NOTE_SUCCESS,
  EDIT_NOTE_FAIL,
  DELETE_NOTE_START,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAIL,
  SET_SELECTED_NOTE_START,
  SET_SELECTED_NOTE_SUCCESS,
  SET_SELECTED_NOTE_FAIL,
  GET_SELECTED_NOTE_START,
  GET_SELECTED_NOTE_SUCCESS,
  GET_SELECTED_NOTE_FAIL,
} from './action-types';

const getNotesStart = () => {
  return {
    type: GET_NOTES_START,
  };
};

const getNotesSuccess = (notes) => {
  return {
    type: GET_NOTES_SUCCESS,
    notes,
  };
};

const getNotesFail = (error) => {
  return {
    type: GET_NOTES_FAIL,
    error,
  };
};

const addNoteStart = () => {
  return {
    type: ADD_NOTE_START,
  };
};

const addNoteSuccess = (notes) => {
  return {
    type: ADD_NOTE_SUCCESS,
    notes,
  };
};

const addNoteFail = (error) => {
  return {
    type: ADD_NOTE_FAIL,
    error,
  };
};

const editNoteStart = () => {
  return {
    type: EDIT_NOTE_START,
  };
};

const editNoteSuccess = (notes) => {
  return {
    type: EDIT_NOTE_SUCCESS,
    notes,
  };
};

const editNoteFail = (error) => {
  return {
    type: EDIT_NOTE_FAIL,
    error,
  };
};

const deleteNoteStart = () => {
  return {
    type: DELETE_NOTE_START,
  };
};

const deleteNoteSuccess = (notes) => {
  return {
    type: DELETE_NOTE_SUCCESS,
    notes,
  };
};

const deleteNoteFail = (error) => {
  return {
    type: DELETE_NOTE_FAIL,
    error,
  };
};

const setSelectedNoteStart = () => {
  return {
    type: SET_SELECTED_NOTE_START,
  };
};

const setSelectedNoteSuccess = (note) => {
  return {
    type: SET_SELECTED_NOTE_SUCCESS,
    note,
  };
};

const setSelectedNoteFail = (error) => {
  return {
    type: SET_SELECTED_NOTE_FAIL,
    error,
  };
};

const getSelectedNoteStart = () => {
  return {
    type: GET_SELECTED_NOTE_START,
  };
};

const getSelectedNoteSuccess = (note) => {
  return {
    type: GET_SELECTED_NOTE_SUCCESS,
    note,
  };
};

const getSelectedNoteFail = (error) => {
  return {
    type: GET_SELECTED_NOTE_FAIL,
    error,
  };
};

export const editNote = (note) => {
  return async (dispatch) => {
    dispatch(editNoteStart());
    try {
      const notes = notesService.updateNote(note);
      dispatch(editNoteSuccess(notes));
    } catch (err) {
      dispatch(editNoteFail(err));
    }
  };
};

export const getSelectedNote = (id) => {
  return async (dispatch) => {
    dispatch(getSelectedNoteStart());
    try {
      const note = notesService.getNote(id);
      dispatch(getSelectedNoteSuccess(note));
    } catch (err) {
      dispatch(getSelectedNoteFail(err));
    }
  };
};

export const setSelectedNote = (note) => {
  return async (dispatch) => {
    dispatch(setSelectedNoteStart());
    try {
      dispatch(setSelectedNoteSuccess(note));
    } catch (err) {
      dispatch(setSelectedNoteFail(err));
    }
  };
};

export const getNotes = () => {
  return async (dispatch) => {
    dispatch(getNotesStart());
    try {
      const notes = notesService.getNotes();
      dispatch(getNotesSuccess(notes));
    } catch (err) {
      dispatch(getNotesFail(err));
    }
  };
};

export const addNote = (note) => {
  return async (dispatch) => {
    dispatch(addNoteStart());
    try {
      note.id = uuidv4();
      const notes = notesService.addNote(note);
      dispatch(addNoteSuccess(notes));
    } catch (err) {
      dispatch(addNoteFail(err));
    }
  };
};

export const deleteNote = (id) => {
  return async (dispatch) => {
    dispatch(deleteNoteStart());
    try {
      const notes = notesService.deleteNote(id);
      dispatch(deleteNoteSuccess(notes));
    } catch (err) {
      dispatch(deleteNoteFail(err));
    }
  };
};
