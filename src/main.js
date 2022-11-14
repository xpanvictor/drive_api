const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
    res.end('Hello uber world')
})

module.exports = app
