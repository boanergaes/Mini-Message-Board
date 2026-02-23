const { formatDate } = require("../utils/timeUtils")
const { getAllMsgsFromDB } = require("../utils/dbUtils")

async function getAllMsgs(req, res) {
    try{
        const url = process.env.BASE_URL + ':' + process.env.PORT
        const msgs = await getAllMsgsFromDB()
        msgs.forEach(msg => {
            const formattedDate = formatDate(msg.added)
            msg.added = formattedDate
        })
        const editPanelId = null
        function setEditPanelId(id) {
            editPanelId = id
        }
        res.render('home', {msgs: msgs, baseUrl: url, editId: editPanelId, setEditId: setEditPanelId})
    } catch (err) {
        throw err
    }
}

module.exports = {getAllMsgs}