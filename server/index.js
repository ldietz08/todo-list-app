require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5500;

app.get("/", (_req, res) => {
  res.send("BONJOUR");
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}! You better go catch it`);
});
