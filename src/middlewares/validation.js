const { body, validationResult } = require('express-validator')

const usernameValidator = 
        body('username').trim().escape()
        .isAlpha().withMessage('Username must only be characters of the Alphabet')
        .isLength({max: 20}).withMessage('Username can not exceed 20 characters')
    
const textValidator = [
    body('text').trim().escape(),
    body('newMsg').trim().escape()        
]

function validateInput(req, res, next) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        const msg = errors.array().map(err => err.msg).join(', and ') + '.'
        res.locals.errMsg = msg
    }

    next()
}

module.exports = {usernameValidator, textValidator, validateInput}