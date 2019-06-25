import Notes from "../../assets/notes.json";

import {
    refs,
    PRIORITY_TYPES,
    ICON_TYPES,
    NOTE_ACTIONS,
} from "../utils/constants"

export let inputTitleValue = '';
export let inputBodyValue = '';

export const inputTitle = refs.editor[0];
export const inputBody = refs.editor[1];


export const inputValue = (event) => {
  if (event.target === inputTitle) {
    inputTitleValue = event.target.value;
    console.log(inputTitleValue);

  }
  if (event.target === inputBody) {
    inputBodyValue = event.target.value;
  }
}


function createElementWithClass(tag, classAdd, text) {
  const element = document.createElement(tag);
  Array.isArray(classAdd) ? classAdd.forEach(el => element.classList.add(el)) : element.classList.add(classAdd);
  text ? element.textContent = text : null;
  return element;
};


const createNoteContent = note => {
  const noteContent = createElementWithClass('div', 'note__content');
  const noteTitle = createElementWithClass('h2', 'note__title', note.title);
  const noteBody = createElementWithClass('p', 'note__body', note.body);
  noteContent.append(noteTitle, noteBody);
  return noteContent;
};


const createActionButton = (noteAction, type) => {
  const button = createElementWithClass('button', 'action');
  button.dataset.action = noteAction;
  const materialIcon = createElementWithClass('i', ['material-icons', 'action__icon'], type);
  button.append(materialIcon);
  return button;
};

const createNoteFooter = note => {
  const noteFooter = createElementWithClass('footer', 'note__footer');
  const noteSectionOne = createElementWithClass('section', 'note__section');
  const noteSectionTwo = createElementWithClass('section', 'note__section');
  const buttonActionOne = createActionButton(NOTE_ACTIONS.DECREASE_PRIORITY, ICON_TYPES.ARROW_DOWN);
  const buttonActionTwo = createActionButton(NOTE_ACTIONS.INCREASE_PRIORITY, ICON_TYPES.ARROW_UP);
  const buttonActionThree = createActionButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT);
  const buttonActionFour = createActionButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE);
  const notePriority = createElementWithClass('span', 'note__priority', `Priority: ${note.priority}`);
  noteSectionOne.append(buttonActionOne, buttonActionTwo, notePriority);
  noteSectionTwo.append(buttonActionThree, buttonActionFour);
  noteFooter.append(noteSectionOne, noteSectionTwo);
  return noteFooter;
};

const createListItem = note => {
  const noteListItem = createElementWithClass('li', 'note-list__item');
  noteListItem.dataset.id = note.id;
  const divNote = createElementWithClass('div', 'note');
  const divContent = createNoteContent(note);
  const footerNote = createNoteFooter(note);
  divNote.append(divContent, footerNote);
  noteListItem.append(divNote);
  return noteListItem;
};

export const renderNoteList = (listRef, notes) => {
  const renderList = notes.map(item => createListItem(item));
  listRef.innerHTML = '';
  listRef.append(...renderList);
};

// renderNoteList(refs.list, notepad.notes)

export const addListItem = (listRef, note) => {
  const toAppend = createListItem(note);
  listRef.append(toAppend)
}