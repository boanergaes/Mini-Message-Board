const { Router } = require('express')
const { editMsg, deleteMsg } = require('../controllers/msgController')
const { getAllMsgs } = require('../controllers/allMsgControllers')

const routeMsg = Router()

routeMsg.put('/:msgId', editMsg)
routeMsg.delete('/:msgId', deleteMsg)

module.exports = {routeMsg}