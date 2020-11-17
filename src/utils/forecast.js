const request = require('request')

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c8d239f793f9dfe02d5ace2821b46424&query='+ latitude + ',' + longitude + '&units=m'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('Unable to find location... try another search', undefined)
        } else {
            const describeWeather = body.current.weather_descriptions[0]
            const currentWeather = body.current.temperature
            const  humidity = body.current.humidity 
            const precip = body.current.precip
            const feelsLike = body.current.feelslike
            if (currentWeather == feelsLike) {
                callback(undefined, describeWeather+ '. It is currently '+currentWeather+' degress out.  Humidity stands on '+humidity+' and there is a '+precip+'% chance of rain')
            } else {
                callback(undefined, describeWeather+ '. It is currently '+currentWeather+' degrees but it feels more like '+feelsLike+' degress out.  Humidity stands on '+humidity+' and there is a '+precip+'% chance of rain')
            }
        }
    })
} 
  module.exports = forecast