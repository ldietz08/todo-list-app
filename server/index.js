require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const PORT = process.env.PORT || 5500;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "todo_list",
});

app.get("/", (_req, res) => {});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}! You better go catch it`);
});
