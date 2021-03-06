console.log('Starting 16applec16.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./16noteslec16.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNotes(argv.title);
} else {
    console.log('Command not recognized');
}



