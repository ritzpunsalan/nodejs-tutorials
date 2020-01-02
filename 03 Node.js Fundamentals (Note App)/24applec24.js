// console.log('Starting 23applec23.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./24noteslec24.js');

const titleOptions = {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        };

const bodyOptions = {
            describe: 'Body of note',
            demand: true,
            alias: 'b'
        };

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions/* {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        } */,
        body: bodyOptions /*{
            describe: 'Body of note',
            demand: true,
            alias: 'b'
        } */
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions, /* {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        }, */
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];
// console.log('Command: ', command);
// console.log('Yargs', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);

    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => /* { notes.logNote(note); } */ notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}


