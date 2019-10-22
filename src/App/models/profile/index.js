// database configuration
const Schema = require('mongoose').Schema

// user model
exports.ProfileSchema = new Schema({
    nome: String,
    estado: String,
    descricao: String,
    endereco: String,
    generoFavoritos: [String],
    numeroDocumento: [{
        rg: String,
        cpf: String
    }],
    login: String,
    senha: String,
    imagem: {
        perfil: {
            nome: String,
            tamanho: Number,
            key: String,
            url: String
        },
        banner: {
            nome: String,
            tamanho: String,
            key: String,
            url: String
        }
    }
})