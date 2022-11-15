const express = require('express')
const bodyParser = require('body-parser')

const controller = require('./controller/controller')
const errorHandler = require('./controller/error')

const app = express()

//middlewares for express app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))


app.get('/', (req, res, next) => {
    res.end('Hello uber world')
})

// post request to get formatted price and time estimates for a journey
/**
 * Request data structure
 * start_lat: latitude of starting position
 * start_long: longitude of starting position
 * end_lat: latitude of end position
 * end_long: longitude of end position
 */
app.post('/uber_data', controller.uber_data)

// global operational error handler
app.use(errorHandler)

module.exports = app
