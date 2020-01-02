const request = require('request');
const yargs = require('yargs');

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

// console.log(argv);

var encodedAddress = encodeURIComponent(argv.address);

// 1301 lombard street

request({
    // url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
    // url: `https://mapogleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to find that address.');       
    } else if (body.status === 'OK') {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
    // console.log(JSON.stringify(/* body, response */ error, undefined, 2));
    /* console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    */
});