console.log('Starting 16noteslec16.js');

const fs = require('fs');

var addNote = (title, body) => {
//    console.log('Adding note', title, body);
    var notes = [];
    var note = {
        title,
        body
    };
    
    try{
        var notesString = fs.readFileSync('16notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {
        
    }
    
//    var notesString = fs.readFileSync('notes-data.json');
//    notes = JSON.parse(notesString);
    
    var duplicateNotes = notes.filter((note) => note.title === title /* {
        return note.title === title;
    }*/);
    
    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('16notes-data.json', JSON.stringify(notes));
    }
    
//    notes.push(note);
//    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    
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



