import request from 'postman-request'
import axios from 'axios'
import fetch from 'node-fetch'
//These all do the same thing, but i'm importing both to learn both.
//Also, asking the internet whether ot use axios or node-fetch was a four
//hour rabbit hole that contained a lot of arrogance but no firm answers.


const url = 'http://api.weatherstack.com/current?access_key=9dedbc55814438072235d930b8d5fa45&query=37.8267,-122.4233&units=f'


//REQUEST

request( {url: url, json: true}, (err, res) => {
    console.log(res.body.current.weather_descriptions[0]+".")
    console.log("It is currently " + res.body.current.temperature + " degrees out.")
    console.log("It feels like " + res.body.current.feelslike + " degrees out.")
})

//AXIOS

// axios.get(url)
// .then((response) => {
//     console.log(response.data.current)
// })
// .catch((error) => {
//     console.log(error)
// })

//FETCH

// fetch(url)
//     .then(res => res.json())

