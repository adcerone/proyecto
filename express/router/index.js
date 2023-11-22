const productsRouter = require('./products.router')
const loginRouter = require('./login.router')
const registerRouter = require('./register.router')
const getUsersRouter = require('./getUsers.router')

function apiRouter(server) {
    server.use('/products', productsRouter)
    server.use('/login', loginRouter)
    server.use('/register', registerRouter)
    server.use('/userlist', getUsersRouter)
}

module.exports = apiRouter; 