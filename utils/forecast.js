import request from 'postman-request'

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9dedbc55814438072235d930b8d5fa45&query=' + latitude + ',' + longitude + '&units=f'

    request( {url:url, json:true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined) 
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                description:response.body.current.weather_descriptions[0],
                temperature:response.body.current.temperature,
                feelsLike:response.body.current.feelslike,
            })
        }
    })
}

export default forecast