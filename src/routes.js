const express = require("express");
const crypto = require("crypto");

// Decoupling the route module express to a variable.
const routes = express.Router();

routes.post("/ongs", (request, response) => {
  const { name, email, whatsapp, cirty, uf } = request.body;

  const id = crypto.randomBytes(4).toString("HEX");

  console.log(id);

  return response.json();
});

module.exports = routes;
