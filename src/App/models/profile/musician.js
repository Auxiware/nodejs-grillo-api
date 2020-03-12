const Schema = require('mongoose').Schema

exports.MusicianSchema = new Schema({
    generos: [{
        type: String,
        required: true
    }],
    instrumentos: [{
        type: String,
        required: true
    }]
})