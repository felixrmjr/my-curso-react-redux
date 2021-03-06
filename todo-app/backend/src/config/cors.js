module.exports = function (request, response, next) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
    // Continua o fluxo da aplicação
    next();
};