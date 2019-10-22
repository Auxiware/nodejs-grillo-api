// database configuration
const Schema = require('mongoose').Schema

// post Schema import
const PostSchema = require('../posts').PostSchema

// event model
exports.EventSchema = new Schema({
    postData: PostSchema,
    titulo: String,
    endereco: String,
    participantes: [PostSchema]
})