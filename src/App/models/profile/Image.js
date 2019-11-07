const Schema = require('mongoose').Schema

exports.ImageSchema = new Schema({
    profile: {
        nome: String,
        tamanho: Number,
        key: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    banner: {
        nome: String,
        tamanho: Number,
        key: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
})