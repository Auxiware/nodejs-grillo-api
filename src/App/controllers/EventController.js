// event model import
const Event = require('../models').Event

// event controller methods
exports.EventController = new class {
    async store(req, res) {
        // creating data
        const evento = await Event.create(req.body)
        // saving results...
        await evento.save().then(result => {
            return res.status(200).json({
                message: 'Evendo criado'
            })
        }).catch(err => {
            return res.status(500).json(err)
        })
    }

    async index(req, res) {
        // getting data events
        const evento = await Event.find().exec().then(result => {
            return res.status(200).json(result)
        }).catch(err => {
            return res.status(500).json(error)
        })
    }

    async show(req, res) {
        // getting a single event
        const evento = await Eventos.findById(req.params.query).exec().then(result => {
            return res.status(200).json(result)
        }).then(err => {
            return res.status(500).json(err)
        })
    }

    async edit(req, res) {
        // searching on database
        const evento = await Eventos.findById(req.params.query).exec()
        // updating...
        evento.set(req.body)
        // saving results...
        await evento.save().then(result => {
            return res.status(200).json({
                message: 'Evento atualizado'
            })
        }).catch(err => {
            return res.status(500).json(err)
        })
    }

    async remove(req, res) {
        // seaching event data
        const evento = await Event.findById({ _id: req.params.query }).exec()

        // deleting on database
        await Event.deleteOne({ _id: req.params.query }).then(result => {
            return res.status(200).json({
                message: 'Evento Removido'
            })
        }).catch(err => {
            return res.status(500).json(err)
        })
    }
}