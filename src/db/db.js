const pool = require('./pool')

async function getAllMsgsFromDB() {
    try {
        return (await pool.query("SELECT * FROM messages")).rows
    } catch(err) {
        throw err
    }
}

async function addMsgsToDB(msg) {
    try {
        await pool.query("INSERT INTO messages (username, text, added) VALUES ($1, $2, $3)", [msg.username, msg.text, msg.added])
    } catch(err) {
        throw err
    }
}

async function deleteMsgFromDB(msgId) {
    try {
        await pool.query("DELETE FROM messages WHERE id = $1", [msgId])
    } catch(err) {
        throw err
    }
}

async function editMsgOnDB(msgId, newMsg) {
    try {
        await pool.query("UPDATE messages SET text = $1 WHERE id = $2", [newMsg, msgId])
    } catch(err) {
        throw err
    }
}

module.exports = { getAllMsgsFromDB, addMsgsToDB, deleteMsgFromDB, editMsgOnDB }