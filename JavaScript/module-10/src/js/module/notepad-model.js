
export default class Notepad {
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
  
  
    filterNote(query = ''){
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