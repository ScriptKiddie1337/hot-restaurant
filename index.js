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
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", function (req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/images", function (req, res) {
  res.sendFile(path.join(__dirname, "/images/bg.jpg"));
});

app.get("/api/tables", function (req, res) {
  return res.json(tables);
});

// Post to tables
app.post("/api/tables", function (req, res) {
  let newReservation = req.body;

  tables.push(newReservation);
  console.log(tables)
  res.sendFile(path.join(__dirname, "./tables.html"));
  // console.log(res.sendStatus(200))
})
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});