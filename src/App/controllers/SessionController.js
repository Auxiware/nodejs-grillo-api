// profile model import
const Profile = require('../models').Profile

exports.SessionController = new class {
    async store(req, res) {
        const profile = await Profile.create(req.body)
        await profile.save()
        const token = await profile.generateToken()

        return res.status(201).json({
            message: 'perfil criado!',
            token
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
        const profile = await Profile.find({ login: req.query.login }).exec()
        await profile.save().then(result => {
            console.log(req.query.login)
            return res.status(200).json(result)
        }).catch(err => {
            return res.status(500).json(err)
        })
    }

    async edit(req, res) {
        const profile = await Profile.findById(req.query.id).exec()
        
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
        const profile = await Profile.findById(req.query.id).exec()

        await Profile.deleteOne({ _id: req.query.id }).exec().then(result => {
            return res.status(200).json({
                message: 'Perfil deletado'
            })
        }).catch(err => {
            return res.status(500).json(err)
        })
    }
}