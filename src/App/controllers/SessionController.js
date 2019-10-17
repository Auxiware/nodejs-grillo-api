// profile model import
const Profile = require('../models').Profile

exports.SessionController = new class {
    async store(req, res) {
        const profile = await Profile.create(req.body)
        await profile.save().then(result => {
            return res.status(201).json({
                message: 'Perfil criado'
            })
        }).catch(err => {
            return res.status(500).json(error)
        })
    }

    async index(req, res) {
        await Profile.find().exec().then(result => {
            return res.status(200).json(result)
        }).catch(err => {
            return res.status(500).json(err)
        })
    }

    async show(req, res) {
        const profile = await Profile.findById(req.params.query).exec()
        await profile.save().then(result => {
            return res.status(200).json(result)
        }).catch(err => {
            return res.status(500).json(err)
        })
    }

    async edit(req, res) {
        const profile = await Profile.findById(req.params.query).exec()
        
        profile.set(req.body)
        
        await profile.save().then(result => {
            return res.status(200).json({
                message: 'Perfil atualizado'
            })
        }).catch(err => {
            return res.status(500).json(err)
        })
    }

    async remove(req, res) {
        const profile = await Profile.findById(req.params.query).exec()

        await Profile.deleteOne({ _id: req.params.query }).exec().then(result => {
            return res.status(200).json({
                message: 'Perfil deletado'
            })
        }).catch(err => {
            return res.status(500).json(err)
        })
    }
}