// database configuration
const Schema = require('mongoose').Schema
// post model
exports.PostSchema = new Schema({
    autor: String,
    descricao: String,
    imagem: {
        nome: String,
        tamanho: String,
        key: String,
        url: String
    }
}, {
    timestamps: true
})