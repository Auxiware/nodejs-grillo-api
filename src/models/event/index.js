// database configuration
const Schema = require('mongoose').Schema
const ObjectId = Schema.Types.ObjectId

// post Schema import
const PostSchema = require('../posts').PostSchema

// event model
exports.EventSchema = new mongoose.Schema({
    _id: ObjectId,
    postData: PostSchema,
    titulo: String,
    endereco: String,
    participantes: [UserSchema]
})