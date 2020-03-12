// database configuration
const Schema = require('mongoose').Schema

// message schema import
const MessageSchema = require('./Message').MessageSchema

// conversation collection model
exports.ChatSchema = new Schema({
    mensagens: [MessageSchema]
})