const { readJSON } = require("../utils/fileUtils")

const DB_PATH = "/home/zeamanuel/Projects/backend/Mini-Message-Board/src/db.json"

async function getAllMsgs(req, res, next) {
    try{
        const url = process.env.BASE_URL + ':' + process.env.PORT + '/new'
        const msgs = await readJSON(DB_PATH)
        res.render('home', {msgs: msgs, newMsgUrl: url})
    } catch (err) {
        throw err
    }
}

module.exports = {getAllMsgs}