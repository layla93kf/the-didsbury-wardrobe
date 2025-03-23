const {
  fetchItemsByCategory,
  fetchItemById,
  fetchRandomItems,
  removeItem,
  insertNewItem,
} = require('../models/app.models');

exports.getItemByCategory = (req, res, next) => {
  const { category } = req.params;

  fetchItemsByCategory(category)
    .then((items) => {
      res.status(200).send({ data: items });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getItemById = (req, res, next) => {
  const { clothing_id } = req.params;

  fetchItemById(clothing_id)
    .then((item) => {
      res.status(200).send({ data: item });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

exports.getRandomItems = (req, res, next) => {
  fetchRandomItems()
    .then((items) => {
      res.status(200).send({ data: items });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

exports.putItem = (req, res, next) => {
  const { body } = req;

  insertNewItem(body)
    .then((response) => {
      res.status(201).send({ yourNewItem: response });
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteItem = (req, res, next) => {
  const { clothing_id } = req.params;

  removeItem(clothing_id)
    .then((response) => {
      res.status(202).send({ data: response });
    })
    .catch((err) => {
      next(err);
    });
};

exports.rentalRequest = (req, res, next) => {
  const { body } = req;
  sendRequest(body)
    .then((response) => {
      res.status(202).send({ data: response });
    })
    .catch((err) => {
      next(err);
    });
};
