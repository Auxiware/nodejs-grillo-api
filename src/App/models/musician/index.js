
// database configuration
const Schema = require('mongoose').Schema

// user model import
const ProfileSchema = require('../profile').ProfileSchema
// user model
exports.MusicianSchema = new Schema({
    user: ProfileSchema,
    generos: [String],
    instrumentos: [String]
})