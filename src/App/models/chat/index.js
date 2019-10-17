// database configuration
const Schema = require('mongoose').Schema
const ObjectId = Schema.Types.ObjectId

// message schema import
const MessageSchema = require('./Message').MessageSchema

// conversation collection model
exports.ChatSchema = new Schema({
    _id: ObjectId,
    mensagens: [MessageSchema]
})