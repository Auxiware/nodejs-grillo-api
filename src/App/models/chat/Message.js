const Schema = require('mongoose').Schema

// user schema import
const ProfileSchema = require('../profile').ProfileSchema

exports.MessageSchema = new Schema({
    descricao: String,
    autor: ProfileSchema,
    criacao: {
        type: Date,
        default: Date.now
    }
})