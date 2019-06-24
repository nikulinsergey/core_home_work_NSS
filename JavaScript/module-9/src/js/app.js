'use strict';

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

const initialNotes = [{
    id: 'id-1',
    title: 'JavaScript essentials',
    body: 'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body: 'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body: 'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];

class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }
  get notes() {
    return this._notes
  }


  static Priority() {
    return{
      LOW: 0,
      NORMAL: 1,
      HIGH:2,
    }
  }


  findNoteById(id) {
    for (let note of this._notes) {
      if (note.id === id) {
        return note;
      }
    }
  }


  saveNote(note) {
    this._notes.push(note);
    return note;
  }


  filterNote = (query = '') => {
    return this._notes.filter(note => note
      .title.toLowerCase()
      .includes(query.toLowerCase()) || note.body.toLowerCase().includes(query.toLowerCase()));
  }

  filterNotesByPriority(priority) {
    const arr2 = [];
    for (let i = 0; i < this._notes.length; i++) {
      if (this._notes[i].priority === priority) {
        arr2.push(this._notes[i]);
      }
    }
    return arr2;
  }
  updateNotePriority(id, priority) {

    for (let i = 0; i < this._notes.length; i++) {
      if (this._notes[i].id === id) {
        this._notes[i].priority = priority;
        return this._notes[i];
      }
    };
  }
  updateNoteContent(id, updatedContent) {
    for (let elem of this._notes) {
      if (elem.id === id) {
        elem = {
          ...elem,
          ...updatedContent
        };
        return elem;
      }
    }
  }


  deleteNote(id) {
    return this._notes = this._notes.filter(note => note.id !== id);
  }

}

const generateUniqueId = () =>
  Math.random()
  .toString(36)
  .substring(2, 15) +
  Math.random()
  .toString(36)
  .substring(2, 15);


const notepad = new Notepad(initialNotes);

const refs = {
  list: document.querySelector('.note-list'),
  filter: document.querySelector('.search-form__input'),
  editor: document.querySelectorAll('.note-editor__input'),
  form: document.querySelector('.note-editor'),
};

let inputTitleValue = '';
let inputBodyValue = '';

const inputTitle = refs.editor[0];
const inputBody = refs.editor[1];


const inputValue = (event) => {
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

const renderNoteList = (listRef, notes) => {
  const renderList = notes.map(item => createListItem(item));
  listRef.innerHTML = '';
  listRef.append(...renderList);
};

renderNoteList(refs.list, notepad.notes)

const addListItem = (listRef, note) => {
  const toAppend = createListItem(note);
  listRef.append(toAppend)
}


const submitForm = (event) => {
  event.preventDefault();
  console.log(inputTitleValue);

  if (inputTitleValue === '' || inputBodyValue === '') {
    alert('Необходимо ввести все поля!')
  } else {
    const newNote = {
      id: generateUniqueId(),
      title: inputTitleValue,
      body: inputBodyValue,
      priority: Notepad.Priority().LOW,
    }
    event.currentTarget.reset();
    inputTitleValue = '';
    inputBodyValue = '';
    notepad.saveNote(newNote);
    addListItem(refs.list, newNote);
    console.log(newNote);
  }
}


const handleFilterChanger = event => {
  const filterNotes = notepad.filterNote(event.currentTarget.value);
  renderNoteList(refs.list, filterNotes);
}

function removeListItem(event) {
    if(event.target.textContent !== 'delete' ) return;
    const parentItem = event.target.closest('li');
    const id = parentItem.dataset.id    
    notepad.deleteNote(id)
    parentItem.remove()
  }
  
  refs.list.addEventListener('click', removeListItem)
  refs.form.addEventListener('input', inputValue)
  refs.form.addEventListener('submit', submitForm)
  refs.filter.addEventListener('input', handleFilterChanger);
  
  
  
  // refs.list.addEventListener('click', removeListItem)
  
  
  