const express = require("express");
const mysql = require("mysql");
const ejs = require("ejs");

const app = express();
const path = require("path");

app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "MathGuru",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
