
const {respond} = require('./handler')

// post request for retrieving uber data
exports.uber_data = async function(req, res, next) {
    const {long, lat} = req.body
    respond(res, "Retrieved", {long, lat})
}