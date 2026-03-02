const { Router } = require('express')
const { editMsg, deleteMsg } = require('../controllers/msgController')
const { textValidator, validateInput } = require('../middlewares/validation')

const routeMsg = Router()

routeMsg.put('/:msgId', textValidator, validateInput, editMsg)
routeMsg.delete('/:msgId', deleteMsg)

module.exports = {routeMsg}