const express = require("express");

const OngController = require("./controllers/OngController");

// Decoupling the route module express to a variable.
const routes = express.Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

module.exports = routes;
