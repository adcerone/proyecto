const productsRouter = require('./products.router')
const usersRouter = require('./users.router')
const registerRouter = require('./register.router')
const loginRouter = require('./login.router')

function apiRouter(server) {
    server.use('/products', productsRouter)
    server.use('/users', usersRouter)
    server.use('/register', registerRouter)
    server.use('/login', loginRouter)
}

module.exports = apiRouter; 