
const request = require('request')

//making the geoCode function reusable with custom locations on callback
const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWxvbnJleiIsImEiOiJja2V4MzN5dWwwYWd3MnpsOGdrdTA0MWI4In0.qgWQBdRCvnlqfd95t4JrWQ&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to conncect to location services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location... Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })

}
module.exports = geoCode