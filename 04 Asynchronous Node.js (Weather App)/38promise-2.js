const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
            var encodedAddress = encodeURIComponent(address);

            // 1301 lombard street

            request({
                // url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
                // url: `https://mapogleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
                url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
                json: true
            }, (error, response, body) => {
                if (error) {
                    // callback('Unable to connect to Google servers.');
                    reject('Unable to connect to Google servers.');
                    // callback();
                    // console.log('Unable to connect to Google servers.');
                } else if (body.status === 'ZERO_RESULTS') {
                    // callback('Unable to find that address.');
                    reject('Unable to find that address.');
                    // console.log('Unable to find that address.');       
                } else if (body.status === 'OK') {
                    // callback(undefined, {
                    resolve({
                        address: body.results[0].formatted_address,
                        latitude: body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng
                    });
        /* 
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        */
                }
    // console.log(JSON.stringify(/* body, response */ error, undefined, 2));
    /* console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    */
        });
    });
};

// geocodeAddress('19146').then((location) => {
geocodeAddress('000000').then((location) => {
    console.log(JSON.stringify(location, undefined, 4));
}, (errorMessage) => {
    console.log(errorMessage);
});