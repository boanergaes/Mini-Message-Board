const express = require('express')
const dotenv = require('dotenv')
const path = require('node:path')

dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(PORT, () => console.log(`Running server on http://localhost:${PORT}`))