const fetchItemsByCategory = require('../models/app.models')

exports.getItemByCategory = (req, res, next) => {
  const { category } = req.params

  fetchItemsByCategory(category)
    .then((items) => {
      res.status(200).send({ data: items })
    })
    .catch((err) => {
      next(err)
    })
}

exports.getItemById = (req, res, next) => {
  const { clothing_id } = req.params

  console.log(clothing_id)

  fetchItemsById(category)
    .then((item) => {
      res.status(200).send({ data: item })
    })
    .catch((err) => {
      next(err)
    })
}
