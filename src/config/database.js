const mongoose = require('mongoose')

/**
 * Database setup
 */
exports.Db = () => {
    mongoose.connect(
        'mongodb+srv://dev:1234@cluster0-jvwp7.mongodb.net/test?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
}