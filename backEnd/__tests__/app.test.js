const { app } = require("../app.js");
const request = require("supertest");
const db = require("../db/connection.js");
const seed = require("../db/seeds/seed.js");
const data = require("../db/data/dev-data/index.js");
beforeEach(() => {
  return seed(data);
});

afterAll(() => {
  db.end();
});

describe("GET /api/clothing/:category", () => {
  it("returns status code 200 with clothing data depending on category", () => {
    return request(app)
      .get("/api/clothing/dresses")
      .expect(200)
      .then(({ body }) => {
        const requiredKeys = [
          "clothing_id",
          "name",
          "origin",
          "size",
          "category_id",
          "price",
          "photos",
        ];
        body.data.forEach((item) => {
          expect(Object.getOwnPropertyNames(item)).toEqual(requiredKeys);
          console.log(item);
          expect(item["category_id"]).toBe(1);
        });
      });
  });
});
