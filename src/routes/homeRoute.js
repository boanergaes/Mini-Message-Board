const { Router } = require('express')
const { getAllMsgs } = require('../controllers/allMsgControllers')

const routeHome = Router()

routeHome.get('', getAllMsgs)

module.exports = {routeHome}