console.log('Starting 14applec14.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./14noteslec14.js');

const argv = yargs.argv;
var command = argv._[0];
//var command = process.argv[2];
console.log('Command: ', command);
//console.log('Procress', process.argv);
console.log('Yargs', argv);

if (command === 'add') {
//    console.log('Adding new note');
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
//    console.log('Listing all notes');
    notes.getAll();
} else if (command === 'read') {
//    console.log('Reading note');    
    notes.getNote(argv.title);
} else if (command === 'remove') {
//    console.log('Removing note');
    notes.removeNotes(argv.title);
} else {
    console.log('Command not recognized');
}



