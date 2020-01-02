const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('20notes.json', originalNoteString);

var noteString = fs.readFileSync('20notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);