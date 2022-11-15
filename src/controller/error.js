const {respond} = require('../handler')

function handleOperationalError(err, req, res, next) {
    respond(res, err.message, {}, 400)
}

module.exports = handleOperationalError