console.log('Starting applec11.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./noteslec11.js');

var filteredArray = _.uniq(['Ritz', 1, 'Ritz', 1, 2, 3, 4,]);
console.log(filteredArray);

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

