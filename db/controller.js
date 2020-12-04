const util = require("util");
const fs = require("fs");

// Utilizing node.js util function for promisification in order to convert callbacks to promises. Will be using readFile and writeFile within GETs, POSTs, and DELETEs. For reference: https://2ality.com/2017/05/util-promisify.html
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// Creates a constructor class
class Store {
  constructor() {
    this.lastId = 0;
  }
  // method to interperate object date in db.json file
  read() {
    return readFileAsync("db/db.json", "utf8");
  }
  // method to turn object datea (note) into string and write it into db.json file
  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }

  // GET method
  // brings in read() method and applies it to any given note at that instance of the Store object
  getNotes() {
    return this.read().then((notes) => {
      let parsedNotes;

      // If notes isn't an array or can't be turned into one, send back a new empty array
      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        parsedNotes = [];
      }
      // prints note
      return parsedNotes;
    });
  }

  // POST method
  addNote(note) {
    // establishes format of note object according to form data
    const { title, text } = note;

    // if there is not title or text content, will throw error
    if (!title || !text) {
      throw new Error("Note 'title' and 'text' cannot be blank");
    }

    // Increment `this.lastId` and assign it to `newNote.id`
    const newNote = { title, text, id: ++this.lastId };

    // Get all notes, add the new note, write all the updated notes, return the newNote
    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }

  // DELETE note method
  removeNote(id) {
    // Get all notes, remove the note with the given id, write the filtered notes
    return this.getNotes()
      .then((notes) => notes.filter((note) => note.id !== parseInt(id)))
      .then((filteredNotes) => this.write(filteredNotes));
  }
}

module.exports = new Store();
// apparently all this wouldnt work without this controller.js file