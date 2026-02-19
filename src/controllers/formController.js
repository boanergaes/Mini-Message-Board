const uuid = require('uuid')
const { readJSON, writeJSON } = require("../utils/fileUtils")
const DB_PATH = "/home/zeamanuel/Projects/backend/Mini-Message-Board/src/db.json"

function renderForm(req, res) {
    const url = process.env.BASE_URL + ':' + process.env.PORT 
    res.render('form', {homeUrl: url})
}

function parseMsgBody(req, res, next) {
    const newId = uuid.v4()
    const currTime = new Date()
    req.body.id = newId
    req.body.added = currTime
    next()
}

async function addMessage(req, res) {
    try {
        const msgs = await readJSON(DB_PATH)
        msgs.push(req.body)
        await writeJSON(DB_PATH, msgs)
        res.redirect('/')
    } catch(err) {
        throw err
    }
}

module.exports = {renderForm, parseMsgBody, addMessage}