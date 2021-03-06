const request = require('request');



const forecast = (longitude,latitude,callback) =>{
    const url ='http://api.weatherstack.com/current?access_key=fed54cbd73174f54e6aecede6ea69ac4&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=f';

    request({url,json: true}, (error,{body} = {}) =>{
        if(error){
            callback('Unable to connect to weather service!',undefined);
        } else if(body.error){
            callback('Unable to find location',undefined);
        } else{
            callback(undefined , `Currently ${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees fahrenheit out. It feels like ${body.current.feelslike} degrees fahrenheit out. The current humidity is ${body.current.humidity}%. `)
        }
    })




}



module.exports = forecast;