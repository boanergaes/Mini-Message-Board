const express = require('express')
const dotenv = require('dotenv')
const path = require('node:path')
const { routeHome } = require('./routes/homeRoute')
const { routeForm } = require('./routes/formRoute')
const { routeMsg } = require('./routes/msgRoute')

dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

// middlewares
app.use(express.static(path.join(__dirname, 'public'))) // to serve static files like css
app.use(express.urlencoded({extended: true})) //to be able to access form data. it's encoded in the url
app.use(express.json())

// set up view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// routes
app.use('/', routeHome)
app.use('/new', routeForm)
app.use('/msg', routeMsg)


app.listen(PORT, () => console.log(`Running server on port ${PORT}`))