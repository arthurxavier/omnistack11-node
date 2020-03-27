const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({
    evento: "omnistack 11.0",
    autor: "Arthur Xavier"
  });
});

app.listen(3333);
