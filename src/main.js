const express = require('express')
const bodyParser = require('body-parser')

const controller = require('./controller')

const app = express()

//middlewares for express app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))


app.get('/', (req, res, next) => {
    res.end('Hello uber world')
})

app.post('/uber_data', controller.uber_data)

module.exports = app
