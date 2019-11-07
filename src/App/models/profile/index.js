// database configuration
const Schema = require('mongoose').Schema
const imageSchema = require('./Image').ImageSchema
const musicianSchema = require('./musician').MusicianSchema
const tokenSchema = require('./token').TokenSchema

// user model
exports.ProfileSchema = new Schema({
    nome: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    login: {
        type: String,
        required: true,
        maxlength: 45
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20
    },
    musicianInfo: musicianSchema,
    tokens: [{ tokenSchema }],
    image: imageSchema
})