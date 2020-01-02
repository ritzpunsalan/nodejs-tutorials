console.log('Starting app.');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);

/* fs.appendFileSync('greetings.txt', 'Hello ' + user.username + '!');                 
console.log(user);

  fs.appendFile('greeting.txt', 'Hello world!');

fs.appendFile('greetings.txt', 'Hello world!', function (err) {
    if (err) {
        console.log('Unable to write to file');
    }
});

*/

