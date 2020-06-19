import { get, post, put, remove } from './base.service';

export const getNotes = () => {
  return get();
};

export const getNote = (id) => {
  return get(id);
};

export const addNote = (note) => {
  return post(note);
};

export const updateNote = (note) => {
  return put(note);
};

export const deleteNote = (id) => {
  return remove(id);
};
