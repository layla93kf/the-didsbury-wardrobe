const express = require('express')
const app = express()
const {
  getItemByCategory,
  getItemById,
} = require('./controllers/app.controllers.js')
const cors = require('cors')

const {
  handlePSQLErrors,
  handleCustomErrors,
  handleServerErrors,
} = require('./controllers/errors.controllers.js')

app.use(express.json())
app.use(cors())
app.get('/api/clothing/:category', getItemByCategory)
app.get('/api/clothing/:clothing_id', getItemById)

//error handling

app.use(handlePSQLErrors, handleCustomErrors, handleServerErrors)

app.all('/api/*', (req, res, next) => {
  res.status(404).send({ msg: 'Path not found!' })
})

app.use((err, req, res, next) => {
  res.status(500).send({ msg: 'Internal server error' })
})

module.exports = { app }
