// profile model import
const Profile = require('../models').Profile
const bcrypt = require('bcryptjs')

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

    async login(req, res) {
        //Login a registered user
        const { login, senha } = req.body

        const profile = await Profile.findOne({ login: login })
            .then(async result => {

                const isPasswordMatch = await bcrypt.compare(senha, result.password)
                if (!isPasswordMatch) {
                    throw new Error({ error: 'Invalid login credentials' })
                }

                const token = await result.generateToken()
                res.json({ token })
            })
    }
}