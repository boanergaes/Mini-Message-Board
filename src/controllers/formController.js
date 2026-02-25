const uuid = require('uuid')
const { addMsgsToDB } = require('../utils/dbUtils')

function renderForm(req, res) {
    res.render('form')
}

function parseMsgBody(req, res, next) {
    req.body.id = uuid.v4()
    req.body.added = new Date()
    next()
}

async function addMessage(req, res) {
    try {
        await addMsgsToDB(req.body)
        res.redirect('/')
    } catch(err) {
        throw err
    }
}

module.exports = {renderForm, parseMsgBody, addMessage}