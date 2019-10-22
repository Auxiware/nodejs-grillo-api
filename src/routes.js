/**
 * Import modules
 */
const express = require('express')

const SessionController = require('./App/controllers').Session
const EventController = require('./App/controllers').Event
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

// creating event
routes.post('/evento', EventController.store)

// getting all events
routes.get('/eventos', EventController.index)

// getting a single event
routes.get('/evento', EventController.show)

// updating a event
routes.put('/evento', EventController.edit)

// deleting a event
routes.delete('/evento', EventController.remove)

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

// creating musician data
routes.post('/musico', async (req, res) => {
    try {            
        // saving on dataset
        const musico = await Musicos.create(req.body)

        // setting the images
        const usuario = await Usuarios.findById({ _id: req.body.usuario_id })
        const imagens = {
            imagemPerfil: {
                url: usuario.imagemPerfil.url
            },
            imagemBanner: {
                url: usuario.imagemBanner.url
            }
        }
        musico.set(imagens)
        const result = await musico.save()

        return res.status(201).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// getting all musicians
routes.get('/musicos', async (req, res) => {
    try {            
        // getting on the database
        const result = await Musicos.find().exec()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// getting a single musician
routes.get('/musico/:id', async (req, res) => {
    try {            
        // searching on dataset
        const musicos = await Musicos.findById(req.params.id).exec()
        const result = await musicos.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// updating a musician
routes.put('/musico/:id', async (req, res) => {
    try {            
        // searching on dataset
        const musico = await Musicos.findById(req.params.id).exec()
        // updating...
        musico.set(req.body)
        const result = await musico.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// deleting a musician
routes.delete('/musico/:id', async (req, res) => {
    try {
        // deleting profile image
        const musico = await Musicos.findById(req.params.id).exec()
        if (musico.imagemPerfil.url) {
            fs.unlink(musico.imagemPerfil.url, err => {
                if (err) throw err
            })
        }
        if (musico.imagemBanner.url) {
            fs.unlink(musico.imagemBanner.url, err => {
                if (err) throw err
            })
        }

        // deleting on dataset
        const result = await Musicos.deleteOne({ _id: req.params.id }).exec()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// creating a post
routes.post('/postagem', async (req, res) => {
    try {
        // saving on dataset
        const post = await PostModel.create(req.body)
        const result = await post.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// getting a post
routes.get('/postagens', async (req, res) => {
    try {
        // getting on database
        const result = await PostModel.find().exec()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// getting a single post
routes.get('/postagem/:id', async (req, res) => {
    try {
        // getting data
        const post = await PostModel.findById(req.params.id).exec()
        const result = await post.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// updating a post
routes.put('/postagem/:id', async (req, res) => {
    try {
        // getting current data
        const post = await PostModel.findById(req.params.id).exec()
        // updating...
        post.set(req.body)
        const result = await post.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// deleting a post
routes.delete('/postagem/:id', async (req, res) => {
    try {
        // deleting post image if exists
        const post = await PostModel.findById(req.params.id).exec()
        if (post.imagem.url) {
            fs.unlink(post.imagem.url, err => {
                if (err) throw err
            })
        }
        // deleting on dataset
        const result = await PostModel.deleteOne({ _id: req.params.id }).exec()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// creating user data
routes.post('/cadastro', SessionController.store)

// getting all users
routes.get('/usuarios', SessionController.index)

// getting a single user
routes.get('/usuario', SessionController.show)

// updating a user
routes.put('/usuario', SessionController.edit)

// deleting a user
routes.delete('/usuario', SessionController.remove)

// creating vacancy
routes.post('/vaga', async (req, res) => {
    try {
        // saving on database
        const vaga = await Vagas.create(req.body)
        const result = await vaga.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// getting all vacancy
routes.get('/vagas', async (req, res) => {
    try {
        // getting data vacancys
        const result = await Vagas.find().exec()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// getting a single vacancy
routes.get('/vaga/:id', async (req, res) => {
    try {
        // searching on dataset
        const vaga = await Vagas.findById(req.params.id).exec()
        const result = await vaga.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// updating a vacancy
routes.put('/vaga/:id', async (req, res) => {
    try {
        // searching on database
        const vaga = await Vagas.findById(req.params.id).exec()
        // updating...
        vaga.set(req.body)
        const result = await vaga.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// deleting a vacancy
routes.delete('/vaga/:id', async (req, res) => {
    try {
        // deleting a vacancy file if exists
        const vaga = await Vagas.findById(req.params.id).exec()
        if (vaga.imagem.url) {
            fs.unlink(vaga.imagem.url, err => {
                if (err) throw err
            })
        }
        // deleting on database
        const result = await Vagas.deleteOne({ _id: req.params.id })

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

exports.Router = routes