const productsRouter = require('./products.router')

function apiRouter(server) {
    server.use('/products', productsRouter)
    server.use('/login', productsRouter)
}

module.exports = apiRouter; 