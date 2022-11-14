
require('dotenv').config()
const {Server} = require('http')

const app = require('./main')

const PORT = process.env.PORT || 4000

async function main() {
    // create server
    const server = Server(app)
    server.listen(PORT, ()=>console.log('Server listening at: ', PORT))
    // handle errors

}

main()

