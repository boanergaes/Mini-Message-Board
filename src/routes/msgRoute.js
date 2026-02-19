const { Router } = require('express')

const routeMsg = Router()

routeMsg.put('/:msgId')
routeMsg.delete('/:msgId')