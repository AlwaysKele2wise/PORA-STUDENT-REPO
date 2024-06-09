const express = require('express')
const controller = require('../Controllers/userController');
const CustomError = require('../ErrorHandlers/globalErrorHandler');

const route = express.Router()

route.get('/signup', controller.getUsers)
route.post('/signin', controller.createUser)
route.post('/login', controller.loginUser )

route.post('/mailer', controller.mailer )

route.all('*', (req, res, next) => {
    const error = new CustomError('Page not found', 404)
    next(error)
})


module.exports = route