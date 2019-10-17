const mongoose = require('mongoose')

/**
 * Database setup
 */
exports.Db = mongoose.connect(
        'mongodb+srv://geovani:geovani123@cluster0-jvwp7.mongodb.net/grillo?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
)