// app object import
const app = require('./app').App

// starting the server
app.listen(process.env.PORT || 3000)
console.log('Application server is running!')