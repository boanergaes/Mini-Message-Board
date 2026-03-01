const { deleteMsgFromDB, editMsgOnDB, getAllMsgsFromDB } = require("../utils/dbUtils")
const db = require('../db/db')

async function editMsg(req, res) {
    try {
        await db.editMsgOnDB(req.params.msgId, req.body.content)
        res.send('Successfully edited msg')
    } catch(err) {
        throw err
    }
}

async function deleteMsg(req, res, next) {
    try {
        const newMsgs = await db.deleteMsgFromDB(req.params.msgId)
        res.send('Successfully deleted msg')
    } catch(err) {
        throw err
    }
}

module.exports = {editMsg, deleteMsg}