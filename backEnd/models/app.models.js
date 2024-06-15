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
  console.log(idPlaceholders);
  return db
    .query(`SELECT * FROM clothing WHERE clothing_id IN (${idPlaceholders});`)
    .then(({ rows }) => {
      console.log(rows);
      return rows;
    })
    .catch((err) => {
      console.log(err);
    });
};
