//var obj = {
//    name: 'Ritz'
//};
//var stringObj = JSON.stringify(obj);
//console.log(typeof stringObj);
//console.log(stringObj);

//var personString = '{"name": "Ritz", "age": 33 }';
//var person = JSON.parse(personString);
//console.log(typeof person);
//console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};
// originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('17notes.json', originalNoteString);

var noteString = fs.readFileSync('17notes.json');
// note
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);