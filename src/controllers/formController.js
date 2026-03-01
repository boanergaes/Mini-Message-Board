const db = require('../db/db')

function renderForm(req, res) {
    res.render('form')
}

function parseMsgBody(req, res, next) {
    req.body.added = new Date()
    next()
}

async function addMessage(req, res) {
    try {
        await db.addMsgsToDB(req.body)
        res.redirect('/')
    } catch(err) {
        throw err
    }
}

module.exports = {renderForm, parseMsgBody, addMessage}