const format = require("pg-format");
const db = require("../connection");
const { formattingPhotos } = require("./utils.js");

const seed = ({ clothingData, categoriesData }) => {
  return db
    .query(`DROP TABLE IF EXISTS clothing, categories;`)
    .then(() => {
      // const categoriesTablePromise = db.query(`
      //     CREATE TABLE categories (
      //       category_id SERIAL PRIMARY KEY,
      //       name VARCHAR(100)
      //     );
      //   `);

      const clothingTablePromise = db.query(`
          CREATE TABLE clothing (
            clothing_id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            origin VARCHAR(255),
            size VARCHAR(20),
            category VARCHAR(30),
            price DECIMAL(10, 2),
            photos VARCHAR[]
          );
        `);

      return Promise.all([clothingTablePromise]);
    })
    .then(() => {
      // const insertCategoriesQueryString = format(
      //   "INSERT INTO categories (name) VALUES %L RETURNING *;",
      //   categoriesData.map(({ name }) => [name])
      // );

      const formattedClothingData = formattingPhotos(clothingData);
      const insertClothingQueryString = format(
        "INSERT INTO clothing (name, origin, size, category, price, photos) VALUES %L RETURNING *;",

        formattedClothingData.map(
          ({ name, origin, size, category, price, photos }) => [
            name,
            origin,
            size,
            category,
            price,
            photos,
          ]
        )
      );

      return Promise.all([
        // db.query(insertCategoriesQueryString),
        db.query(insertClothingQueryString),
      ]);
    });
};

module.exports = seed;
