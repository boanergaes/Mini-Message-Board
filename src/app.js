const express = require('express')
const dotenv = require('dotenv')
const path = require('node:path')
const { routeHome } = require('./routes/homeRoute')
const { routeForm } = require('./routes/formRoute')

dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', routeHome)
app.use('/new', routeForm)


app.listen(PORT, () => console.log(`Running server on http://localhost:${PORT}`))