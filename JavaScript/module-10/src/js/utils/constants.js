export const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

export const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

export const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

export const shortid = require('shortid');
export const refs = {
  list: document.querySelector('.note-list'),
  filter: document.querySelector('.search-form__input'),
  editor: document.querySelectorAll('.note-editor__input'),
  form: document.querySelector('.note-editor'),
};

