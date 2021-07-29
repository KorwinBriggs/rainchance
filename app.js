import geocode from './utils/geocode.js'
import forecast from './utils/forecast.js'



const args = process.argv.slice(2)

if (args.length === 0) {

    console.log('Please re-run app with location')

} else {

    const allArgs = process.argv.slice(2).join(' ')

    geocode(allArgs, (error, data) => {
        if (error) {
            return console.log(error)
        }

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            
            console.log(data.location)
            console.log(forecastData)
        })
    })

} 


