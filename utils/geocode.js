import request from 'postman-request'

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia29yd2luIiwiYSI6ImNrcm1iM25wMjF4MjQyb280b3VndWc1amEifQ.XG-Vj5_uZaWDNF9DSwr9HQ&limit=1'

    request( {url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to map service', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to match search term to location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1], 
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name} )
        }
    })

}

export default geocode