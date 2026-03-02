const db = require('../db/db')

async function editMsg(req, res) {
    try {
        await db.editMsgOnDB(req.params.msgId, req.body.content)
        res.redirect('/')
    } catch(err) {
        throw err
    }
}

async function deleteMsg(req, res, next) {
    try {
        await db.deleteMsgFromDB(req.params.msgId)
        res.redirect('/')
    } catch(err) {
        throw err
    }
}

module.exports = {editMsg, deleteMsg}