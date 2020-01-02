console.log('Starting 13applec13.js');

const fs = require('fs');
//const os = require('os');
const _ = require('lodash');

const notes = require('./13noteslec13.js');

var command = process.argv[2];
console.log('Command: ', command);
console.log(process.argv);

if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('Reading note');      
} else if (command === 'remove') {
    console.log('Removing note');
} else {
    console.log('Command not recognized');
}

//console.log(process.argv);

//var filteredArray = _.uniq(['Minker']);
//console.log(filteredArray);

//var filteredArray = _.uniq(['Ritz', 1, 'Ritz', 1, 2, 3, 4,]);
//console.log(filteredArray);

//console.log(_.isString(true));
//console.log(_.isString('Ritz'));

//console.log('Result:', notes.add(9, -2));

//var res = notes.addNote();
//console.log(res);

//var user = os.userInfo();
//
//fs.appendFileSync('greetings10.txt', `Hello ${user.username}! You are ${notes.age}.`);

/* fs.appendFileSync('greetings.txt', 'Hello ' + user.username + '!');                 
console.log(user);

  fs.appendFile('greeting.txt', 'Hello world!');

fs.appendFile('greetings.txt', 'Hello world!', function (err) {
    if (err) {
        console.log('Unable to write to file');
    }
});

*/

