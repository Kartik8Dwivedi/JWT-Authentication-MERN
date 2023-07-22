const  mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI

const databaseConnect = async () => {
    await mongoose
        .connect(MONGO_URI)
        .then((conn) => {console.log(`Connected to ${conn.connection.host}`)})
        .catch((e) => {console.log(e.message)})
}

module.exports = databaseConnect