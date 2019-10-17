// database configuration
const Schema = require('mongoose').Schema
const ObjectId = Schema.Types.ObjectId

// post schema import
const PostSchema = require('../posts').PostSchema
// musician schema import
const MusicianSchema = require('../musician').MusicianSchema

// vacancy model
exports.VacancySchema = new Schema({
    _id: ObjectId,
    postData: PostSchema,
    titulo: String,
    endereco: String,
    validade: Date,
    inscritos: [MusicianSchema]
})