// profile model import
const Profile = require('../models').Profile
const bcrypt = require('bcryptjs')

exports.SessionController = new class {
    async store(req, res) {
        const profile = await Profile.create(req.body)
        await profile.save()
        const token = await profile.generateToken()

        return res.status(201).json({
            // user: profile.login,
            // token
            message: 'ok'
        })
    }

    async login(req, res) {
        //Login a registered user
        const { login, password } = req.body

        const profile = await Profile.findOne({ login: login })
            .then(async result => {

                const isPasswordMatch = await bcrypt.compare(password, result.password)
                if (!isPasswordMatch) {
                    throw new Error({ error: 'Invalid login credentials' })
                }

                const token = await result.generateToken()
                return res.status(204).json({ token })
            })
            .catch(err => res.status(500).json(err))
    }
}