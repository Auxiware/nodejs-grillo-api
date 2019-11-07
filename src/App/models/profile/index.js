// database configuration
const Schema = require('mongoose').Schema
const imageSchema = require('./Image').ImageSchema
const musicianSchema = require('./musician').MusicianSchema
const tokenSchema = require('./token').TokenSchema

// bcrypt library
const bcrypt = require('bcryptjs')
// jwt import
const jwt = require('jsonwebtoken')

// user model
const Profile = new Schema({
    nome: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    login: {
        type: String,
        required: true,
        maxlength: 45
    },
    password: {
        type: String,
        required: true,
    },
    musicianInfo: musicianSchema,
    tokens: [tokenSchema],
    image: imageSchema
})

Profile.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

Profile.methods.generateToken = async function() {
    // Generate an auth token for the user
    const profile = this
    const token = jwt.sign({_id: profile._id}, process.env.JWT_KEY)
    profile.tokens = profile.tokens.concat({token})
    await profile.save()
    return token
}

exports.ProfileSchema = Profile