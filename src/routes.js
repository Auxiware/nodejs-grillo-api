/**
 * Import modules
 */
const express = require('express')

const SessionController = require('./App/controllers').Session
const PostController = require('./App/controllers').Post

/**
 * Starting the routes
 */
const routes = express.Router()

/**
 * Creating the routes
 */
// creating event
routes.post('/post', PostController.store)

// getting all events
routes.get('/posts', PostController.index)

// getting a single event
routes.get('/post', PostController.show)

// updating a event
routes.put('/post', PostController.edit)

// deleting a event
routes.delete('/post', PostController.remove)

// creating message
routes.post('/conversa', async (req, res) => {
    try {
        // saving on database
        const conversa = await Conversa.create(req.body)
        const result = await conversa.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// getting all conversations
routes.get('/conversas', async (req, res) => {
    try {
        // getting data message
        const result = await Conversa.find().exec()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// getting a single message
routes.get('/conversa/:id', async (req, res) => {
    try {
        // searching on dataset
        const conversa = await Conversa.findById(req.params.id).exec()
        const result = await conversa.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// sending a message
routes.put('/conversa/:id', async (req, res) => {
    try {
        // searching on database
        const conversa = await Conversa.findById(req.params.id).exec()
        // updating...
        conversa.set(req.body)
        const result = await conversa.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// deleting a message
routes.delete('/conversa/:id', async (req, res) => {
    try {
        // deleting on database
        const result = await Conversa.deleteOne({ _id: req.params.id })

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// creating user data
routes.post('/user', SessionController.store)

// getting all users
routes.get('/users', SessionController.index)

// getting a single user
routes.get('/user', SessionController.show)

// updating a user
routes.put('/user', SessionController.edit)

// deleting a user
routes.delete('/user', SessionController.remove)

exports.Router = routes