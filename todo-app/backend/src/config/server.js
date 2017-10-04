const port = 3003

// Faz o parser do corpo da requisição
const bodyParser = require('body-parser')
// Servidor que roda em cima do node
const express = require('express')
// Start do express
const server = express()

// Configurando o bodyParser
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server





