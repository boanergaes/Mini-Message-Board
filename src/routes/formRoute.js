const { Router } = require('express')
const { renderForm, parseMsgBody, addMessage } = require('../controllers/formController')
const { usernameValidator, textValidator, validateInput } = require('../middlewares/validation')

const routeForm = Router()

routeForm.get('', renderForm)
routeForm.post('', usernameValidator, textValidator, validateInput, parseMsgBody, addMessage)

module.exports = {routeForm}