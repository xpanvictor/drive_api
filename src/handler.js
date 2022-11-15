function respond(res, message, data, status=200) {
    const response = {
        message,
        data
    }
    res.status(200).json(response)
    res.end()
}

module.exports = {
    respond
}