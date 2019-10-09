// database configuration
const mongoose = require('mongoose')

// event model
const EventSchema = new mongoose.Schema({
    autor: {
        usuario_id: String,
        nome: String
    },
    titulo: String,
    endereco: String,
    descricao: String,
    imagem: {
        nome: String,
        tamanho: String,
        key: String,
        url: String
    },
    criacao: {
        type: Date,
        defautl: Date.now
    },
    participantes: [{
        usuario_id: String,
        nome: String
    }]
})

module.exports = mongoose.model('events', EventSchema)