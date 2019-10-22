// database configuration
const Schema = require('mongoose').Schema

// user model import
const ProfileSchema = require('../profile').ProfileSchema

// post model
exports.PostSchema = new Schema({
    autor: ProfileSchema,
    descricao: String,
    imagem: {
        nome: String,
        tamanho: String,
        key: String,
        url: String
    },
    criacao: {
        type: Date,
        default: Date.now
    }
})