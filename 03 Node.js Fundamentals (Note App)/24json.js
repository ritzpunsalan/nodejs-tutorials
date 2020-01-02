const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('24notes.json', originalNoteString);

var noteString = fs.readFileSync('24notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);