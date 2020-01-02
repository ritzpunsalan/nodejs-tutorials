const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express! runtacunt!<h1>');
    /*
    res.send({
        name: 'Ritz',
        likes: [
            'Running',
            'Sleeping',
            'and working on the computer'
        ]
    });
    */
    res.render('43home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    // res.send('About Page');
    res.render('43about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });    
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});