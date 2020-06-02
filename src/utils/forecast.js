const request = require('request')

const foreCast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/8e54f323365c5e56af1b7f8b0e796efa/'+latitude+','+longitude+'?units=si';
    // const url = 'https://api.darksky.net/forecast/8e54f323365c5e56af1b7f8b0e796efa/-26.5712702,153.0736333?units=si';

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find locations weather', undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. With a ${body.currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = foreCast