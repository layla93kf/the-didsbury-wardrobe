const fetchItemsByCategory = require("../models/app.models");

getItemByCategory = (req, res, next) => {
  const { category } = req.params;

  fetchItemsByCategory(category)
    .then((items) => {
      res.status(200).send({ data: items });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = getItemByCategory;
