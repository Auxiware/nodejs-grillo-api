// dotenv config
require('dotenv').config()

// app object import
const app = require('./app').App
const http = require('http').createServer(app)
const mongoose = require('mongoose')

// socket.io config
const io = require('socket.io')(http)

io.on('connect', socket => {
    console.log('a user connected')
    socket.on('chat message', msg => console.log(msg))
})

// database connect
mongoose.connect(
    'mongodb+srv://dev:1234@cluster0-jvwp7.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

// starting the server
http.listen(8080)
console.log('Application server is running!')