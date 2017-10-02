const mongoose = require('mongoose')

// Substituindo a promisse padrão do mongoose pela do proprio node
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')