const db = require('../db/connection.js');
const axios = require('axios');
require('dotenv').config();

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
      for (const key in rows[0]) {
        if (rows[0][key] === '') {
          return Promise.reject({
            status: 400,
            msg: 'Your item is missing information, it has not been added to the database.',
          });
        }
      }
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
          msg: 'Clothing ID does not exist',
        });
      }

      return rows[0];
    });
};

exports.sendRequest = async (rentalRequest) => {
  const date = rentalRequest.dateStart.split('T')[0];
  const nameOfSender = rentalRequest.fullName;
  const message1 = `Hi Lizzie,`;
  const message2 = `A rental request has come in from ${rentalRequest.fullName}. `;
  const message3 = `They would like to rent the <b>${rentalRequest.item} by <b>${rentalRequest.origin}</b> from <b>${date}</b> for <b>${rentalRequest.rentalDuration} days</b>.`;
  const message4 = `Their address is ${rentalRequest.address}, ${rentalRequest.city}, ${rentalRequest.postcode}.
Send an email to ${rentalRequest.email} if you would like to confirm the rental.`;

  const htmlBody = `
    <html>
      <body>
        <h2>Rental Request from ${rentalRequest.fullName}</h2>
        <p>${message1}</p>
        <p>${message2}</p>
        <p>${message3}</p>
        <p>${message4}</p>
      </body>
    </html>`;

  const body = {
    content: {
      from: 'no-reply@thedidsburywardrobe.uk',
      subject: `New rental request from ${nameOfSender}!`,
      html: htmlBody,
    },
    recipients: [
      {
        address: 'layla.kawafi@hotmail.com',
      },
    ],
  };
  const headers = {
    Authorization: process.env.SPARKPOST_API_KEY,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(
      'https://api.sparkpost.com/api/v1/transmissions',
      body,
      { headers },
    );
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: 'Error sending email',
      error: error.message,
    };
  }
};
