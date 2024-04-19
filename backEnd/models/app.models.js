const db = require("../db/connection.js");

fetchItemsByCategory = (category) => {
  const categoryLookUp = {
    dresses: 1,
    jumpsuits: 2,
    jackets: 3,
    skirts: 4,
  };

  return db
    .query(
      `SELECT * FROM clothing WHERE category_id = ${categoryLookUp[category]};`
    )
    .then(({ rows }) => {
      if (rows.length === 0) {
        return Promise.reject({
          status: 404,
          message: "category not found",
        });
      }

      return rows;
    });
};

module.exports = fetchItemsByCategory;
