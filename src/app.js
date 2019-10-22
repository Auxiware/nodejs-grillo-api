const express = require('express')
const morgan = require('morgan')

class App {
    constructor() {
        // starting express app
        this.express = express()

        // starting methods
        this.middlewares()
        this.routes()
    }

    // middlewares start method
    middlewares() {
        // json body support config
        this.express.use(express.json())
        this.express.use(
            express.urlencoded({
                extended: true
            })
        )
        // morgen log start
        this.express.use(morgan('dev'))
        // database connection start
        const database = require('./config/database').Db
        database()
    }

    // routes start method
    routes() {
        // starting the routes
        const routes = require('./routes').Router
        this.express.use(routes)
    }
}

// exporting the app
exports.App = new App().express