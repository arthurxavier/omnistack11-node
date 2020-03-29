const express = require("express");

// Decoupling the route module express to a variable.
const routes = express.Router();

routes.get("/", (request, response) => {
  return response.json({
    evento: "omnistack 11.0",
    autor: "Arthur Xavier"
  });
});

module.exports = routes;
