const express = require('express');

const app = express();
const {
  getItemByCategory,
  getItemById,
  getRandomItems,
  putItem,
  deleteItem,
} = require('./controllers/app.controllers.js');
const cors = require('cors');

const {
  handlePSQLErrors,
  handleCustomErrors,
  handleServerErrors,
} = require('./controllers/errors.controllers.js');

app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

//GET
app.get('/api/clothing/:category', getItemByCategory);
app.get('/api/items/:clothing_id', getItemById);
app.get('/api/home/top-picks', getRandomItems);

//POST
app.post('/api/clothing/:category', putItem);

//DELETE
app.delete('/api/items/:clothing_id', deleteItem);

//error handling

app.use(handlePSQLErrors, handleCustomErrors, handleServerErrors);

app.all('/api/*', (req, res, next) => {
  res.status(404).send({ msg: 'Path not found!' });
});

module.exports = { app };
