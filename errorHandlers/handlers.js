



const asyncErrorHandler = (func) => {
    return (req, res, next) => {
        func(req, res, next).catch(err => next(err))
    }
}

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error'
    res.status(err.statusCode).json({
        status : err.statusCode,
        message : err.message
    })
}

module.exports = asyncErrorHandler