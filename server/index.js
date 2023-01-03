require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const PORT = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "todo_list",
});

app.get("/todos", (req, res) => {
  const q = "SELECT * FROM todos";
  db.query(q, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.post("/todos", (req, res) => {
  const q = "INSERT INTO todos (`newTodo`) VALUES (?)";
  const values = [req.body.newTodo];

  db.query(q, [values], (err, result) => {
    if (err) return res.json(err);
    return res.json("Todo has been added successfully!");
  });
});

app.delete("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const q = "DELETE FROM todos WHERE id = ?";

  db.query(q, todoId, (err, result) => {
    if (err) return res.json(err);
    return res.json("Todo was successfully deleted");
  });
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}! You better go catch it`);
});
