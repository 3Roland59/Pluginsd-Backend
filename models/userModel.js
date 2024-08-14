// const { mongoose } = require('./base')
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please input your email"]
    },

    username: {
        type: String,
        required: false,
    },

    password: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    
    }
)

const User = mongoose.model('User', UserSchema);

module.exports.User = User

// export User