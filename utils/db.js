const mongoose = require('mongoose')
const { MONGO_DB_CONNECTION_STRING } = require('./utils')


mongoose.connect(MONGO_DB_CONNECTION_STRING)
    .then(() => {
        console.log("MongoDb connection succesful")
    })
    .catch(() => {
        console.log("MongoDb connection failed")
    });





// module.exports.mongoose = mongoose;
