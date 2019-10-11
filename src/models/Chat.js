// database configuration
const Mongoose = require('mongoose')

// conversation collection model
const ChatSchema = new Mongoose.Schema(
    [{
        mensagem: [{
            descricao: String,
            usuario_id: String,
            autor: String,
            criação: {
                type: Date,
                default: Date.now
            }
        }]
    }]
)

module.exports = Mongoose.model('chat', ChatSchema)