// import express from 'express'
const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

//define paths for express config -- public, and handlebar views
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine/views locations
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Korwin',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Korwin',
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Korwin',
        helpText: 'This is an example help message',
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'New York',
        weather: 'Partly weather',
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: 'help article not found lol'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: 'page not found lol'
    })
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})