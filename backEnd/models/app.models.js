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

exports.fetchItemById = (clothingId) => {
  return db
    .query(`SELECT * FROM clothing WHERE clothing_id = $1;`, [clothingId])
    .then(({ rows }) => {
      if (rows.length === 0) {
        return Promise.reject({
          status: 404,
          message: 'item not found',
        })
      }

      return rows
    })
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateRandomIds(count, min, max) {
  const randomIds = []
  for (let i = 0; i < count; i++) {
    randomIds.push(getRandomInt(min, max))
  }
  return randomIds
}

exports.fetchRandomItems = () => {
  const randomIds = generateRandomIds(8, 1, 50)
  const idPlaceholders = randomIds.map((_, index) => `$${index + 1}`).join(', ')
  return db
    .query(`SELECT * FROM clothing WHERE clothing_id IN (${idPlaceholders});`)
    .then(({ rows }) => {
      return rows
    })
}
