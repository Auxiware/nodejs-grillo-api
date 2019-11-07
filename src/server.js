// app object import
const app = require('./app').App

// database connect
mongoose.connect(
    'mongodb+srv://dev:1234@cluster0-jvwp7.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

// starting the server
app.listen(8080)
console.log('Application server is running!')