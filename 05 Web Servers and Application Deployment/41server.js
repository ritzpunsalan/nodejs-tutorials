const express = require('express');

var app = express();

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express! runtacunt!<h1>');
    res.send({
        name: 'Ritz',
        likes: [
            'Running',
            'Sleeping',
            'and working on the computer'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});

app.listen(3000);