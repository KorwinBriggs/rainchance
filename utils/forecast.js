import request from 'postman-request'

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9dedbc55814438072235d930b8d5fa45&query=' + latitude + ',' + longitude + '&units=f'

    request( {url, json:true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined) 
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + '. It feels like ' + body.current.feelslike + '.'
                
            // {
            //     description:body.current.weather_descriptions[0],
            //     temperature:body.current.temperature,
            //     feelsLike:body.current.feelslike,
            // }
            
            )
        }
    })
}

export default forecast