import request from 'postman-request'
import axios from 'axios'
import fetch from 'node-fetch'
//These all do the same thing, but i'm importing both to learn both.
//Also, asking the internet whether ot use axios or node-fetch was a four
//hour rabbit hole that contained a lot of posturing but no sure answers.


const urlWeather = 'http://api.weatherstack.com/current?access_key=9dedbc55814438072235d930b8d5fa45&query=37.8267,-122.4233&units=f'
const urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia29yd2luIiwiYSI6ImNrcm1iM25wMjF4MjQyb280b3VndWc1amEifQ.XG-Vj5_uZaWDNF9DSwr9HQ&limit=1'

//REQUEST

// request( {url: urlWeather, json: true}, (err, res) => {
//     if (err) { 
//         console.log('Unable to connect to weather service')
//     } else if (res.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(res.body.current.weather_descriptions[0]+".")
//         console.log("It is currently " + res.body.current.temperature + " degrees out.")
//         console.log("It feels like " + res.body.current.feelslike + " degrees out.")
//     }
// })

// request( {url: urlGeo, json: true}, (err, res) => {
//     if (err) {
//         console.log('Unable to connect to map service')
//     } else if (res.body.features.length === 0) {
//         console.log('Unable to match search term to location')
//     } else {
//         const latitude = res.body.features[0].center[1]
//         const longitude = res.body.features[0].center[0]
//         console.log("Latitude: " + latitude)
//         console.log("Longitude: " + longitude)
//     }
// })



//AXIOS

// axios.get(urlWeather)
//     .then((response) => {
//         if (response.data.error) {
//             console.log('Weather service unable to find location')
//         } else {
//             console.log(response.data.current.weather_descriptions[0]+".")
//             console.log("It is currently " + response.data.current.temperature + " degrees out.")
//             console.log("It feels like " + response.data.current.feelslike + " degrees out.")
//         }
//     })
//     .catch((error) => {
//         console.log('Unable to connect to weather service')
//     })

// axios.get(urlGeo)
//     .then( (response) => {
//         if (response.data.features.length === 0) {
//             console.log('Unable to match search term to location')
//         } else {
//             const latitude = response.data.features[0].center[1]
//             const longitude = response.data.features[0].center[0]
//             console.log("Latitude: " + latitude)
//             console.log("Longitude: " + longitude)
//         }
//     })
//     .catch( (error) => {
//         console.log('Unable to match search term to location')
//     })
