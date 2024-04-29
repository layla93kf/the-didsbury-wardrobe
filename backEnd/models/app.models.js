const db = require("../db/connection.js");

fetchItemsByCategory = (category) => {
  const categoryStrings = {
    dresses: "Dresses",
  };
  const categoryValue = categoryStrings[category];

  return db
    .query(`SELECT * FROM clothing WHERE category = $1;`, [categoryValue])
    .then(({ rows }) => {
      console.log(rows);
      if (rows.length === 0) {
        return Promise.reject({
          status: 404,
          message: "category not found",
        });
      }
      console.log(rows);
      return rows;
    });
};

module.exports = fetchItemsByCategory;
