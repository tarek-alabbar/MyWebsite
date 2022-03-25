const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.port || 5000

const app = express()

app.use('/api/items', require('./routes/itemRoutes'))

app.listen(port, () => console.log(`Server Started on port ${port}`))
