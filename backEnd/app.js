const express = require('express');

const app = express();
const {
  getItemByCategory,
  getItemById,
  getRandomItems,
  putItem,
  deleteItem,
  rentalRequest,
} = require('./controllers/app.controllers.js');
const cors = require('cors');

const {
  handleSQLErrors,
  handleCustomErrors,
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
app.post('/api/email-request', rentalRequest);
//DELETE
app.delete('/api/items/:clothing_id', deleteItem);

//error handling

app.use(handleCustomErrors);
app.use(handleSQLErrors);
app.all('/*', (req, res, next) => {
  res.status(404).send({ msg: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).send({ msg: 'Internal server error' });
});

module.exports = { app };
