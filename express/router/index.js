const productsRouter = require('./products.router')
const userRouter = require('./user.router')
const registerRouter = require('./register.router')
const loginRouter = require('./login.router')
const User = require('../public/models/user')
const msgRouter = require('./msg.router')


function apiRouter(server) {
    server.use('/products', productsRouter)
    server.use('/user', userRouter)
    server.use('/register', registerRouter)
    server.use('/login', loginRouter)
    server.use('/msg', msgRouter)


}

module.exports = apiRouter; 