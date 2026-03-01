const { formatDate } = require("../utils/timeUtils")
const db = require('../db/db')

async function getAllMsgs(req, res) {
    try{
        const msgs = await db.getAllMsgsFromDB()
        msgs.forEach(msg => {
            const formattedDate = formatDate(msg.added)
            msg.added = formattedDate
        })
        const editPanelId = null
        res.render('home', {msgs: msgs, editId: editPanelId})
    } catch (err) {
        throw err
    }
}

module.exports = {getAllMsgs}