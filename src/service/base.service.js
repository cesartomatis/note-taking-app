export const get = (id = null) => {
  const notes = JSON.parse(window.localStorage.getItem('notes'));
  if (id) {
    return notes.find((n) => n.id === id);
  } else {
    return notes;
  }
};

export const post = (note) => {
  let notes = get();
  if (!notes) {
    notes = [];
  }
  notes.push(note);
  window.localStorage.setItem('notes', JSON.stringify(notes));
  return notes;
};

export const put = (note) => {
  const notes = get();
  if (!notes) {
    return null;
  }

  const index = notes.findIndex((n) => n.id === note.id);
  notes[index] = note;
  window.localStorage.setItem('notes', JSON.stringify(notes));
  return notes;
};

export const remove = (id) => {
  const notes = get();
  if (!notes) {
    return null;
  }

  const index = notes.findIndex((n) => n.id === id);
  notes.splice(index, 1);
  window.localStorage.setItem('notes', JSON.stringify(notes));
  return notes;
};
