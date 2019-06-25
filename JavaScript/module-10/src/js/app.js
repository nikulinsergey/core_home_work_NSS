import {
    PRIORITY_TYPES,
    ICON_TYPES,
    NOTE_ACTIONS,
    shortid,
    refs
} from "./utils/constants";
import Notes from "../assets/notes.json";

import Notepad from "./module/notepad-model";

import {
    renderNoteList,
    addListItem,
    inputTitle,
    inputBody,
    inputTitleValue,
    inputBodyValue,
    inputValue
} from "./module/view";


const notepad = new Notepad(Notes);

renderNoteList(refs.list, notepad.notes)

const submitForm = (event) => {
    event.preventDefault();
    // console.log(inputTitleValue);

    if (inputTitleValue === '' || inputBodyValue === '') {
        alert('Необходимо ввести все поля!')
    } else {
        const newNote = {
            id: shortid,
            title: inputTitleValue,
            body: inputBodyValue,
            priority: Notepad.Priority().LOW,
        }
        event.currentTarget.reset();
        // inputTitleValue = '';
        // inputBodyValue = '';
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
    if (event.target.textContent !== 'delete') return;
    const parentItem = event.target.closest('li');
    const id = parentItem.dataset.id
    notepad.deleteNote(id)
    parentItem.remove()
}

refs.list.addEventListener('click', removeListItem)
refs.form.addEventListener('input', inputValue)
refs.form.addEventListener('submit', submitForm)
refs.filter.addEventListener('input', handleFilterChanger);