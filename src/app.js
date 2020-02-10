const express = require("express");
const routes = require("./routes");

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({ limit: "5mb" }));
app.use(routes);

module.exports = app;
