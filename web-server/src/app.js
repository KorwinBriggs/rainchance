// import express from 'express'
const express = require('express')
const path = require('path')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))
//includes public/index.html, which works as home by default

app.get('', (req, res) => {
    res.render('index')
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'New York',
        weather: 'Partly weather'
    })
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})