
// database configuration
const Mongoose = require('mongoose')

// user model
const MusicianSchema = new Mongoose.Schema({
    usuario_id: String,
    nome: String,
    genero: [{
        nome: String
    }],
    instrumento: [{
        nome: String
    }],
    imagemPerfil: {
        url: String
    },
    imagemBanner: {
        url: String
    }
})

module.exports = Mongoose.model('musician', MusicianSchema)