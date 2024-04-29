const express = require("express");
const app = express();
const getItemByCategory = require("./controllers/app.controllers.js");
const cors = require("cors");

const {
  handlePSQLErrors,
  handleCustomErrors,
  handleServerErrors,
} = require("./controllers/errors.controllers.js");

app.use(express.json());
app.use(cors());
app.get("/api/clothing/:category", getItemByCategory);

//error handling

app.use(handlePSQLErrors, handleCustomErrors, handleServerErrors);

app.all("/api/*", (req, res, next) => {
  res.status(404).send({ msg: "Path not found!" });
});

module.exports = { app };
