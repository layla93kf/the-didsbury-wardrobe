const db = require('../db/connection.js');
const nodemailer = require('nodemailer');

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
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.OUTLOOK_EMAIL,
      pass: process.env.OUTLOOK_PASSWORD,
    },
  });

  const nameOfSender = rentalRequest.fullName;

  const message = `A rental request has come in from ${rentalRequest.fullName}. They would like to rent the ${rentalRequest.item} by ${rentalRequest.origin} on ${rentalRequest.startDate} until ${rentalRequest.endDate}. Send an email to ${rentalRequest.email} to confirm the rental.`;

  // const address = `${rentalRequest.address}, ${rentalRequest.city}, ${rentalRequest.postcode}`;

  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: 'layla.kawafi@hotmail.com',
    subject: `New Rental Request from ${nameOfSender}!`, // Subject line
    text: message,
    // html: '<b>Hello world?</b>', // html body
  });
  console.log(info.response);
};
