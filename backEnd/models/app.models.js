const db = require('../db/connection.js')

exports.fetchItemsByCategory = (category) => {
  const categoryStrings = {
    dresses: 'dresses',
    jackets: 'jackets',
    jumpsuits: 'jumpsuits',
    skirts: 'skirts',
  }
  const categoryValue = categoryStrings[category]

  return db
    .query(`SELECT * FROM clothing WHERE category = $1;`, [categoryValue])
    .then(({ rows }) => {
      if (rows.length === 0) {
        return Promise.reject({
          status: 404,
          message: 'category not found',
        })
      }

      return rows
    })
}

exports.fetchItemsById = (clothingId) => {
  return db
    .query(`SELECT * FROM clothing WHERE clothing_id = $1;`, [clothingId])
    .then(({ rows }) => {
      console.log(rows)
      if (rows.length === 0) {
        return Promise.reject({
          status: 404,
          message: 'item not found',
        })
      }
      console.log(rows)
      return rows
    })
}
