
// database configuration
const Schema = require('mongoose').Schema
const ObjectId = Schema.Types.ObjectId

// user model import
const ProfileSchema = require('../profile').ProfileSchema
// user model
exports.MusicianSchema = new Schema({
    _id: ObjectId,
    user: ProfileSchema,
    generos: [String],
    instrumentos: [String]
})