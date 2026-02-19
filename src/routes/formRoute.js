const { Router } = require('express')
const { renderForm, parseMsgBody, addMessage } = require('../controllers/formController')

const routeForm = Router()

routeForm.get('', renderForm)
routeForm.post('', parseMsgBody, addMessage)

module.exports = {routeForm}