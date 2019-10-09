/**
 * Import modules
 */
const express = require('express')

/**
 * Starting the router
 */
const router = express.Router()

/**
 * Creating the routes
 */
// creating event
router.post('/evento', async (req, res) => {
    try {
        // saving on database
        const evento = await Eventos.create(req.body)
        const result = await evento.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// getting all events
router.get('/eventos', async (req, res) => {
    try {
        // getting data events
        const result = await Eventos.find().exec()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// getting a single event
router.get('/evento/:id', async (req, res) => {
    try {
        // searching on dataset
        const evento = await Eventos.findById(req.params.id).exec()
        const result = await evento.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// updating a event
router.put('/evento/:id', async (req, res) => {
    try {
        // searching on database
        const evento = await Eventos.findById(req.params.id).exec()
        // updating...
        evento.set(req.body)
        const result = await evento.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// deleting a event
router.delete('/evento/:id', async (req, res) => {
    try {
        // deleting a event file if exists
        const evento = await Eventos.findById(req.params.id).exec()
        if (evento.imagem.url) {
            fs.unlink(evento.imagem.url, err => {
                if (err) throw err
            })
        }
        // deleting on database
        const result = await Eventos.deleteOne({ _id: req.params.id })

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

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