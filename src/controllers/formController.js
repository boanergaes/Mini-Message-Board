const db = require('../db/db')
const inputValidator = require('../middlewares/validation')

function renderForm(req, res) {
    res.render('form')
}


function parseMsgBody(req, res, next) {
    req.body.added = new Date()
    next()
}

async function addMessage(req, res) {
    try {
        if (!res.locals.errMsg) {
            await db.addMsgsToDB(req.body)
            res.redirect('/')
        } else {
            res.render('form')
        }
    } catch(err) {
        throw err
    }
}

module.exports = {renderForm, parseMsgBody, addMessage}