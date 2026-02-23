const uuid = require('uuid')
const { readJSON, writeJSON } = require("./fileUtils")

const DB_PATH = "/home/zeamanuel/Projects/backend/Mini-Message-Board/src/db.json"

async function getAllMsgsFromDB() {
    try {
        return await readJSON(DB_PATH)
    } catch(err) {
        throw err
    }
}

async function addMsgsToDB(msg) {
    try {
        const msgs = await readJSON(DB_PATH)
        msgs.push(msg)
        await writeJSON(DB_PATH, msgs)
    } catch(err) {
        throw err
    }
}

async function deleteMsgFromDB(msgId) {
    try {
        const msgs = await readJSON(DB_PATH)
        const newMsgs = msgs.filter(msg => msg.id !== msgId)
        await writeJSON(DB_PATH, newMsgs)
        return newMsgs
    } catch(err) {
        throw err
    }
}

async function editMsgOnDB(msgId, newMsg) {
    try {
        const msgs = await readJSON(DB_PATH)
        const target = msgs.find(msg => msg.id === msgId)
        target.text = newMsg
        await writeJSON(DB_PATH, msgs)
    } catch(err) {
        throw err
    }
}

module.exports = {getAllMsgsFromDB, addMsgsToDB, deleteMsgFromDB, editMsgOnDB}