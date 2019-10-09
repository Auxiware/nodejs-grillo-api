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
        const evento = await Eventos.create(req.body);
        const result = await evento.save();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// getting all events
router.get('/eventos', async (req, res) => {
    try {
        // getting data events
        const result = await Eventos.find().exec();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// getting a single event
router.get('/evento/:id', async (req, res) => {
    try {
        // searching on dataset
        const evento = await Eventos.findById(req.params.id).exec();
        const result = await evento.save();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// updating a event
router.put('/evento/:id', async (req, res) => {
    try {
        // searching on database
        const evento = await Eventos.findById(req.params.id).exec();
        // updating...
        evento.set(req.body);
        const result = await evento.save();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// deleting a event
router.delete('/evento/:id', async (req, res) => {
    try {
        // deleting a event file if exists
        const evento = await Eventos.findById(req.params.id).exec();
        if (evento.imagem.url) {
            fs.unlink(evento.imagem.url, err => {
                if (err) throw err;
            });
        }
        // deleting on database
        const result = await Eventos.deleteOne({ _id: req.params.id });

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});