// database configuration
const Schema = require('mongoose').Schema

// post schema import
const PostSchema = require('../posts').PostSchema
// musician schema import
const MusicianSchema = require('../musician').MusicianSchema

// vacancy model
exports.VacancySchema = new Schema({
    postData: PostSchema,
    titulo: String,
    endereco: String,
    validade: Date,
    inscritos: [MusicianSchema]
})