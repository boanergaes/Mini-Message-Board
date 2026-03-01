const { Router } = require('express')
const { editMsg, deleteMsg } = require('../controllers/msgController')

const routeMsg = Router()

routeMsg.put('/:msgId', editMsg)
routeMsg.delete('/:msgId', deleteMsg)

module.exports = {routeMsg}