const express = require('express')

module.exports = function(server){

    // API Routes
    const router = express.Router()

    // server.use = middler
    server.use('/api', router)

    // TODO Routes
    const todoService = require('../api/todo/todoService')

    // Pega todos os métodos declarados no arquivo todoService.js
    todoService.register(router, '/todos')
}