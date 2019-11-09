// profile model import
const Post = require('../models').Post

exports.PostController = new class {
    async store(req, res) {
        const post = await Post.create(req.body)
        await post.save().then(result => {
            return res.status(201).json({
                message: 'Postagem criada'
            })
        }).catch(err => {
            return res.status(500).json(error)
        })
    }

    async index(req, res) {
        await Post.find().exec().then(result => {
            return res.status(200).json(result)
        }).catch(err => {
            return res.status(500).json(err)
        })
    }

    async show(req, res) {
        const profile = await Post.findById(req.query.id).exec()
        await profile.save().then(result => {
            return res.status(200).json(result)
        }).catch(err => {
            return res.status(500).json(err)
        })
    }

    async edit(req, res) {
        const profile = await Post.findById(req.query.id).exec()
        
        profile.set(req.body)
        
        await profile.save().then(result => {
            return res.status(200).json({
                message: 'Postagem atualizada'
            })
        }).catch(err => {
            return res.status(500).json(err)
        })
    }

    async remove(req, res) {
        const profile = await Post.findById(req.query.id).exec()

        await Post.deleteOne({ _id: req.query.id }).exec().then(result => {
            return res.status(200).json({
                message: 'Postagem deletada'
            })
        }).catch(err => {
            return res.status(500).json(err)
        })
    }
}