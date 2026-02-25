const { formatDate } = require("../utils/timeUtils")
const { getAllMsgsFromDB } = require("../utils/dbUtils")

async function getAllMsgs(req, res) {
    try{
        const msgs = await getAllMsgsFromDB()
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