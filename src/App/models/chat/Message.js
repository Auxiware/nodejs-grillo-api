const Schema = require('mongoose').Schema
const ObjectId = Schema.Types.ObjectId

// user schema import
const ProfileSchema = require('../profile').ProfileSchema

exports.MessageSchema = new Schema({
    _id: ObjectId,
    descricao: String,
    autor: ProfileSchema,
    criacao: {
        type: Date,
        default: Date.now
    }
})