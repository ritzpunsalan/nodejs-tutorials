console.log('Starting applec10.js');

const fs = require('fs');
const os = require('os');
const notes = require('./noteslec10.js');

console.log('Result:', notes.add(9, -2));

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

