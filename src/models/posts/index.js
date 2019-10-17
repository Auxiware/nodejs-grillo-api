// database configuration
const Schema = require('mongoose').Schema
const ObjectId = Schema.Types.ObjectId

// user model import
const ProfileSchema = require('../profile').ProfileSchema

// post model
exports.PostSchema = new Schema({
    _id: ObjectId,
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