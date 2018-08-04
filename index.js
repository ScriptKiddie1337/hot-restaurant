// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// tables (data)
// =============================================================
var tables = [
  {
    name: "yoda",
    phone: "805-454-4943",
    email: "JediMaster@gmail.com",
    id: 0,
  }
];

// Displays all tables json
app.get("/api/tables", function (req, res) {
  return res.json(tables);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
