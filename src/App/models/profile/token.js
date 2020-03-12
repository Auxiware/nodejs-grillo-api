const Schema = require('mongoose').Schema

exports.TokenSchema = new Schema({
    token: {
        type: String,
        required: true
    }
})