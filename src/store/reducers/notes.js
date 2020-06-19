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
} from '../actions/action-types';

const initialState = {
  notes: null,
  selectedNote: null,
  error: null,
};

const getNotesStart = (state, action) => {
  return {
    ...state,
    error: null,
  };
};

const getNotesSuccess = (state, action) => {
  return {
    ...state,
    notes: action.notes,
    error: null,
  };
};

const getNotesFail = (state, action) => {
  return {
    ...state,
    notes: null,
    error: action.error,
  };
};

const addNoteStart = (state, action) => {
  return {
    ...state,
    error: null,
  };
};

const addNoteSuccess = (state, action) => {
  return {
    ...state,
    notes: action.notes,
    error: null,
  };
};

const addNoteFail = (state, action) => {
  return {
    ...state,
    error: action.error,
  };
};

const editNoteStart = (state, action) => {
  return {
    ...state,
    error: null,
  };
};

const editNoteSuccess = (state, action) => {
  return {
    ...state,
    notes: action.notes,
    error: null,
  };
};

const editNoteFail = (state, action) => {
  return {
    ...state,
    error: action.error,
  };
};

const deleteNoteStart = (state, action) => {
  return {
    ...state,
    error: null,
  };
};

const deleteNoteSuccess = (state, action) => {
  return {
    ...state,
    notes: action.notes,
    error: null,
  };
};

const deleteNoteFail = (state, action) => {
  return {
    ...state,
    error: action.error,
  };
};

const setSelectedNoteStart = (state, action) => {
  return {
    ...state,
    error: null,
  };
};

const setSelectedNoteSuccess = (state, action) => {
  return {
    ...state,
    selectedNote: action.note,
    error: null,
  };
};

const setSelectedNoteFail = (state, action) => {
  return {
    ...state,
    error: action.error,
  };
};

const getSelectedNoteStart = (state, action) => {
  return {
    ...state,
    error: null,
  };
};

const getSelectedNoteSuccess = (state, action) => {
  return {
    ...state,
    selectedNote: action.note,
    error: null,
  };
};

const getSelectedNoteFail = (state, action) => {
  return {
    ...state,
    error: action.error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES_START:
      return getNotesStart(state, action);
    case GET_NOTES_SUCCESS:
      return getNotesSuccess(state, action);
    case GET_NOTES_FAIL:
      return getNotesFail(state, action);
    case ADD_NOTE_START:
      return addNoteStart(state, action);
    case ADD_NOTE_SUCCESS:
      return addNoteSuccess(state, action);
    case ADD_NOTE_FAIL:
      return addNoteFail(state, action);
    case EDIT_NOTE_START:
      return editNoteStart(state, action);
    case EDIT_NOTE_SUCCESS:
      return editNoteSuccess(state, action);
    case EDIT_NOTE_FAIL:
      return editNoteFail(state, action);
    case DELETE_NOTE_START:
      return deleteNoteStart(state, action);
    case DELETE_NOTE_SUCCESS:
      return deleteNoteSuccess(state, action);
    case DELETE_NOTE_FAIL:
      return deleteNoteFail(state, action);
    case SET_SELECTED_NOTE_START:
      return setSelectedNoteStart(state, action);
    case SET_SELECTED_NOTE_SUCCESS:
      return setSelectedNoteSuccess(state, action);
    case SET_SELECTED_NOTE_FAIL:
      return setSelectedNoteFail(state, action);
    case GET_SELECTED_NOTE_START:
      return getSelectedNoteStart(state, action);
    case GET_SELECTED_NOTE_SUCCESS:
      return getSelectedNoteSuccess(state, action);
    case GET_SELECTED_NOTE_FAIL:
      return getSelectedNoteFail(state, action);
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
