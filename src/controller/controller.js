
const {respond} = require('../handler')

// post request for retrieving uber data
exports.uber_data = async function(req, res, next) {
    const {
        start_lat,
        start_long,
        end_lat,
        end_long
    } = req.body
    // quick data validation
    if ([start_long, start_lat, end_long, end_lat].some(value => !value)) return next(new Error('Incomplete data'))
    respond(res, "Retrieved", {start_lat, end_long})
}