const express = require("express");
const app = express();
const connection = require('./db')

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.route("/alok", (req, res) => {
  res.send("Hello Alok!");
});

app.route("/Rajat", (req, res) => {
  res.send("Hello Rajat!");
});

app.route("/sqldata", (req, res) => {
  const query = "SELECT * FROM smartphones";

  connection.query(query, (err, results) => {
    if (err) {
      console.error("❌ Query error:", err);
      res.status(500).json({ error: "Database query failed" });
      return;
    }
    res.json(results);
  });
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});