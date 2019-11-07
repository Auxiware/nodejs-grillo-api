const model = require('mongoose').model

module.exports = {
    Profile: model('profile', require('./profile').ProfileSchema),
    Post: model('post', require('./posts').PostSchema),
    Chat: model('chat', require('./chat').ChatSchema)
}