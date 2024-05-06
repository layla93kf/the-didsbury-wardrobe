const format = require('pg-format')
const db = require('../connection')
const { formattingPhotos } = require('./utils.js')

const seed = (clothingData) => {
  return db
    .query(`DROP TABLE IF EXISTS clothing, categories;`)
    .then(() => {
      const clothingTablePromise = db.query(`
          CREATE TABLE clothing (
            clothing_id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            origin VARCHAR(255),
            size VARCHAR(20),
            category VARCHAR(30),
            price DECIMAL(10, 2),
            photos VARCHAR
          );
        `)

      return Promise.all([clothingTablePromise])
    })
    .then(() => {
      const insertClothingQueryString = format(
        'INSERT INTO clothing (name, origin, size, category, price, photos) VALUES %L RETURNING *;',

        clothingData.map(({ name, origin, size, category, price, photos }) => [
          name,
          origin,
          size,
          category,
          price,
          photos,
        ]),
      )

      return Promise.all([db.query(insertClothingQueryString)])
    })
}

module.exports = seed
