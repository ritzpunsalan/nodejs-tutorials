const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/e4bb227a733194ebf66916c3bf3dfdfe/${lat},${lng}`,
        // url: `https://api.darksky.net/forecast/e4bb227a733194ebf66916c3bf3dfdfe/33.7723912,-95.7932008`,
        // url: 'https://api.darksky.net/forecast/e4bb227a733194ebf66916c3bffe/33.23912,-95.7932008',
        json: true
    }, (error, response, body) => {
        if (error) {
            // console.log('Unable to connect to Forcast.io server.');
            callback('Unable to connect to Forcast.io server.');
        } else if (response.statusCode === 400) {
            // console.log('Unable to fetch weather.');
            callback('Unable to fetch weather.');
        } else if (!error && response.statusCode === 200) {
        /*
            console.log(body.currently.temperature);
        } else {
            console.log('Unable to fetch weather.');
        */
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
            });
        }
        // console.log(body.currently.temperature);
    });
};

/*
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
*/

module.exports.getWeather = getWeather;