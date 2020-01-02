/*
const yargs = require('yargs');

const geocode = require('./geocode/34geocode.js');

const argv = yargs
    .options({
        // address
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        } 
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});
*/

const request = require('request');
    
request({
    // url: 'https://api.darksky.net/forecast/e4bb227a733194ebf66916c3bf3dfdfe/33.7723912,-95.7932008',
    url: 'https://api.darksky.net/forecast/e4bb227a733194ebf66916c3bffe/33.23912,-95.7932008',
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to Forcast.io server.');
    } else if (response.statusCode === 400) {
        console.log('Unable to fetch weather.');
    } else if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch weather.');
    }
    // console.log(body.currently.temperature);
});
