function respond(res, message, data, statusCode=200) {
    const response = {
        message,
        data
    }
    res.status(statusCode).json(response)
    return res.end()
}

module.exports = {
    respond
}