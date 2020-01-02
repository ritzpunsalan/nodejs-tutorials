console.log('Starting 17noteslec17.js');

const fs = require('fs');

var fetchNotes = () => {
    try{
        var notesString = fs.readFileSync('17notes-data.json');
//        notes = JSON.parse(notesString);
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('17notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    
//    try{
//        var notesString = fs.readFileSync('17notes-data.json');
//        notes = JSON.parse(notesString);
//    } catch (e) {
//        
//    }

    var duplicateNotes = notes.filter((note) => note.title === title);
    
    if (duplicateNotes.length === 0) {
        notes.push(note);
//        fs.writeFileSync('17notes-data.json', JSON.stringify(notes));
        saveNotes(notes);
        return note;
    }   
};

var getAll = () => {
    console.log('Getting all notes');
}

var getNote = (title) => {
    console.log('Getting note', title);
}

var removeNote = (title) => {
    console.log('Removing note', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};



