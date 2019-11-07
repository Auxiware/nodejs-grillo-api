const Schema = require('mongoose').Schema

// user schema import
const ProfileSchema = require('../profile/index.js').ProfileSchema

exports.MessageSchema = new Schema({
    descricao: String,
    autor: ProfileSchema,
    criacao: {
        type: Date,
        default: Date.now
    }
})