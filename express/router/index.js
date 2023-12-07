const productsRouter = require('./products.router')
const userRouter = require('./user.router')
const registerRouter = require('./register.router')
const loginRouter = require('./login.router')
const User = require('../public/models/user')
const cartRouter = require('./cart.router')

function apiRouter(server) {
    server.use('/products', productsRouter)
    server.use('/user', userRouter)
    server.use('/register', registerRouter)
    server.use('/login', loginRouter)
    server.use('/cart', cartRouter)

}

module.exports = apiRouter; 