'use strict'

// Конструктор Notepad при инициализации принимает массив заметок
const Notepad = function Notepad(notes = []) {
  this.notes = notes,
  this.getNotes = function() {
    return this.notes;
    /*
     * Принимает: ничего
     * Возвращает: все заметки, значение свойства notes
     */
  },

  this.findNoteById = function(id) {
    for (let note of this.notes) {
      if (note.id === id) {
        return note;
      }
    }

    /*
     * Ищет заметку в массиве notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: заметку с совпавшим полем id или undefined если ничего не найдено
     */
  },


  this.saveNote = function(note) {
    return this.notes.push(note);
    /*
     * Сохраняет заметку в массив notes
     *
     * Принимает: объект заметки
     * Возвращает: сохраненную заметку
     */
  },


  this.deleteNote = function(id) {
    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id === id) {
        this.notes.splice(i, 1);
      };
    };
    /*
     * Удаляет заметку по идентификатору из массива notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: ничего
     */
  },



  this.updateNoteContent = function(id, updatedContent) {
    for (let elem of this.notes) {
      if (elem.id === id) {
        elem = {
          ...elem,
          ...updatedContent
        };
        return elem;
      }
    }
    // Object.assign(this.findById(id), updatedContent)
  },
  /*
   * Обновляет контент заметки
   * updatedContent - объект с полями вида {имя: значение, имя: значение}
   * Свойств в объекте updatedContent может быть произвольное количество
   *
   * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
   * Возвращает: обновленную заметку
   */
  this.updateNotePriority = function(id, priority) {

    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id === id) {
        this.notes[i].priority = priority;
        return this.notes[i];
      };
    };
    /*
     * Обновляет приоритет заметки
     *
     * Принимает: идентификатор заметки и ее новый приоритет
     * Возвращает: обновленную заметку
     */
  },
  this.filterNotesByQuery = function(query) {
    const arr = [];
    for (let i = 0; i < this.notes.length; i++) {
      const titleToLowerCase = this.notes[i].title.toLowerCase();
      const bodyToLowerCase = this.notes[i].body.toLowerCase();
      if (titleToLowerCase.includes(query) || bodyToLowerCase.includes(query)) {
        arr.push(this.notes[i])
      }
    }
    return arr;
  },

  /*
   * Фильтрует массив заметок по подстроке query.
   * Если значение query есть в заголовке или теле заметки - она подходит
   *
   * Принимает: подстроку для поиска в title и body заметки
   * Возвращает: новый массив заметок, контент которых содержит подстроку
   */
  this.filterNotesByPriority = function(priority) {

    const arr2 = [];
    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].priority === priority) {
        arr2.push(this.notes[i]);
      }
    };
    return arr2;
    /*
     * Фильтрует массив заметок по значению приоритета
     * Если значение priority совпадает с приоритетом заметки - она подходит
     *
     * Принимает: приоритет для поиска в свойстве priority заметки
     * Возвращает: новый массив заметок с подходящим приоритетом
     */
  }
};





// Добавляем статическое свойство, в котором храним приоритеты.
Notepad.Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};




const initialNotes = [{
    id: 'id-1',
    title: 'JavaScript essentials',
    body: 'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: Notepad.Priority.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body: 'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: Notepad.Priority.NORMAL,
  },
];

const notepad = new Notepad(initialNotes);

/*
 * Смотрю что у меня в заметках после инициализации
 */
console.log('Все текущие заметки: ', notepad.getNotes());

/*
 * Добавляю еще 2 заметки и смотрю что получилось
 */

notepad.saveNote({
  id: 'id-3',
  title: 'Get comfy with Frontend frameworks',
  body: 'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: Notepad.Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-4',
  title: 'Winter clothes',
  body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Notepad.Priority.LOW,
});

console.log('Все текущие заметки: ', notepad.getNotes());

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL);

console.log(
  'Заметки после обновления приоритета для id-4: ',
  notepad.getNotes(),
);

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority('id-3', Notepad.Priority.LOW);

console.log(
  'Заметки после обновления приоритета для id-3: ',
  notepad.getNotes(),
);

/*
 * Решил отфильтровать заметки по слову html
 */
console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotesByQuery('html'),
);

/*
 * Решил отфильтровать заметки по слову javascript
 */
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery('javascript'),
);

/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */
console.log(
  'Отфильтровали заметки по нормальному приоритету: ',
  notepad.filterNotesByPriority(Notepad.Priority.NORMAL),
);

/*
 * Обновим контент заметки с id-3
 */
notepad.updateNoteContent('id-3', {
  title: 'Get comfy with React.js or Vue.js',
});

console.log(
  'Заметки после обновления контента заметки с id-3: ',
  notepad.getNotes(),
);

/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */
notepad.deleteNote('id-2');
console.log('Заметки после удаления с id -2: ', notepad.getNotes());