const model = require('mongoose').model

module.exports = {
    Profile: model('profile', require('./profile/index.js').ProfileSchema),
    Post: model('post', require('./posts').PostSchema),
    Chat: model('chat', require('./chat').ChatSchema)
}