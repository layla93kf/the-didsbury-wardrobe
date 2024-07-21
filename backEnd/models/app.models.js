const db = require('../db/connection.js');

exports.fetchItemsByCategory = (category) => {
  const categoryStrings = {
    dresses: 'dresses',
    jackets: 'jackets',
    jumpsuits: 'jumpsuits',
    skirts: 'skirts',
    tops: 'tops',
    accessories: 'accessories',
  };
  const categoryValue = categoryStrings[category];

  return db
    .query(`SELECT * FROM clothing WHERE category = $1;`, [categoryValue])
    .then(({ rows }) => {
      if (rows.length === 0) {
        return Promise.reject({
          status: 404,
          message: 'category not found',
        });
      }

      return rows;
    });
};

exports.fetchItemById = (clothingId) => {
  return db
    .query(`SELECT * FROM clothing WHERE clothing_id = $1;`, [clothingId])
    .then(({ rows }) => {
      if (rows.length === 0) {
        return Promise.reject({
          status: 404,
          message: 'item not found',
        });
      }

      return rows;
    });
};
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomIds(count, min, max) {
  const randomIds = [];

  for (let i = 0; i < count; i++) {
    const randomInt = getRandomInt(min, max);
    if (!randomIds.includes(randomInt)) {
      randomIds.push(randomInt);
    }
  }
  return randomIds;
}

exports.fetchRandomItems = () => {
  const randomIds = generateRandomIds(9, 1, 50);

  const idPlaceholders = randomIds.map((id) => `${id}`).join(', ');

  return db
    .query(`SELECT * FROM clothing WHERE clothing_id IN (${idPlaceholders});`)
    .then(({ rows }) => {
      return rows;
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.insertNewItem = (body) => {
  const itemKeys = ['name', 'origin', 'size', 'category', 'price', 'photos'];
  const newItemsKeys = Object.keys(body);

  const invalidKeys = newItemsKeys.filter((key) => !itemKeys.includes(key));

  if (invalidKeys.length > 0) {
    return Promise.reject({
      status: 400,
      msg: 'you have invalid properties in your request',
    });
  }
  const valuesArr = Object.values(body);
  return db
    .query(
      `INSERT INTO clothing 
  (name, origin, size, category, price, photos)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING*;`,
      valuesArr,
    )
    .then(({ rows }) => {
      return rows;
    });
};

exports.removeItem = (itemId) => {
  return db
    .query(`DELETE FROM clothing WHERE clothing_id = $1 RETURNING*;`, [itemId])
    .then(({ rows }) => {
      if (rows.length === 0) {
        return Promise.reject({
          status: 404,
          msg: 'clothing_id does not exist',
        });
      }

      return rows[0];
    });
};
