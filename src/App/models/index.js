const model = require('mongoose').model

module.exports = {
    Profile: model('profile', require('./profile').ProfileSchema),
    Musician: model('musician', require('./musician').MusicianSchema),
    Post: model('post', require('./posts').PostSchema),
    Event: model('event', require('./event').EventSchema),
    Vacancy: model('vacancy', require('./vacancy').VacancySchema),
    Chat: model('chat', require('./chat').ChatSchema)
}