const format = require("pg-format");
const db = require("../connection");

// const seed = ({ clothingData }) => {
//   return db
//     .query(`DROP TABLE IF EXISTS clothing;`)
//     .then(() => {
//       const clothingTablePromise = db.query(`
//         CREATE TABLE clothing (
//           clothing_id Serial PRIMARY KEY,
//            VARCHAR NOT NULL
//         );`)

//     .then(() => {
//       const insertMessagesQueryString = format(
//         "INSERT INTO messages (elder_id, helper_id, status_id, chat_room_id, message_body) VALUES %L;",
//         messagesData.map(
//           ({ elder_id, helper_id, status_id, chat_room_id, message_body }) => [
//             elder_id,
//             helper_id,
//             status_id,
//             chat_room_id,
//             message_body,
//           ]
//         )
//       );

//       return db.query(insertMessagesQueryString);
//     })
//     .then(() => {
//       const insertStatusQueryString = format(
//         "INSERT INTO status (status_id, status) VALUES %L;",
//         statusData.map(({ status_id, status }) => [status_id, status])
//       );

//       const statusPromise = db.query(insertStatusQueryString);

//       const insertUsersQueryString = format(
//         "INSERT INTO users (phone_number, first_name, surname, is_elder, postcode, avatar_url, profile_msg) VALUES %L;",
//         userData.map(
//           ({
//             phone_number,
//             first_name,
//             surname,
//             is_elder,
//             postcode,
//             avatar_url,
//             profile_msg,
//           }) => [
//             phone_number,
//             first_name,
//             surname,
//             is_elder,
//             postcode,
//             avatar_url,
//             profile_msg,
//           ]
//         )
//       );
//       const usersPromise = db.query(insertUsersQueryString);

//       return Promise.all([statusPromise, usersPromise]);
//     })
//     .then(() => {
//       const insertJobsQueryString = format(
//         "INSERT INTO jobs (job_title, job_desc, posted_date, expiry_date, elder_id, helper_id, status_id, postcode) VALUES %L RETURNING *;",
//         jobsData.map(
//           ({
//             job_title,
//             job_desc,
//             posted_date,
//             expiry_date,
//             elder_id,
//             helper_id,
//             status_id,
//             postcode,
//           }) => [
//             job_title,
//             job_desc,
//             posted_date,
//             expiry_date,
//             elder_id,
//             helper_id,
//             status_id,
//             postcode,
//           ]
//         )
//       );

//       return db.query(insertJobsQueryString);
//     });
// };

// module.exports = seed;

///////////////////////////////////
const seed = ({ clothingData, categoriesData, picturesData }) => {
  return db
    .query(`DROP TABLE IF EXISTS pictures, clothing, categories;`)
    .then(() => {
      const categoriesTablePromise = db.query(`
          CREATE TABLE categories (
            category_id SERIAL PRIMARY KEY,
            name VARCHAR(100)
          );
        `);

      const clothingTablePromise = db.query(`
          CREATE TABLE clothing (
            clothing_id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            origin VARCHAR(255),
            size VARCHAR(20),
            category_id INT,
            price DECIMAL(10, 2),
            FOREIGN KEY (category_id) REFERENCES categories(category_id)
          );
        `);

      const picturesTablePromise = db.query(`
          CREATE TABLE pictures (
            picture_id SERIAL PRIMARY KEY,
            item_id INT,
            url VARCHAR(255),
            FOREIGN KEY (item_id) REFERENCES clothing(clothing_id)
          );
        `);

      return Promise.all([
        categoriesTablePromise,
        clothingTablePromise,
        picturesTablePromise,
      ]);
    })
    .then(() => {
      const insertCategoriesQueryString = format(
        "INSERT INTO categories (name) VALUES %L;",
        categoriesData.map(({ name }) => [name])
      );

      const insertClothingQueryString = format(
        "INSERT INTO clothing (name, origin, size, category_id, price) VALUES %L RETURNING *;",
        clothingData.map(({ name, origin, size, category_id, price }) => [
          name,
          origin,
          size,
          category_id,
          price,
        ])
      );

      const insertPicturesQueryString = format(
        "INSERT INTO pictures (item_id, url) VALUES %L RETURNING *;",
        picturesData.map(({ item_id, url }) => [item_id, url])
      );

      return Promise.all([
        db.query(insertCategoriesQueryString),
        db.query(insertClothingQueryString),
        db.query(insertPicturesQueryString),
      ]);
    });
};

module.exports = seed;
