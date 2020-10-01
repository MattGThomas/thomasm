const mysql = require("mysql");
// const dbConfig = require("./config/dbConfig");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// require("dotenv").config();
const port = process.env.PORT || 4200;
const server = express();
const connection = require("./config/connect.js");

server.use(bodyParser.json());
server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));

server.get("/expenses", function (req, res) {
  connection.query("SELECT * FROM expenses", function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results });
  });
});

server.get("/expenses/:id", function (req, res) {
  connection.query(
    "SELECT * FROM expenses where Id=?",
    [req.params.id],
    function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results[0]));
    }
  );
});

server.post("/expenses", function (req, res) {
  let params = req.body;

  connection.query("INSERT INTO expenses SET ?", params, function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

server.put("/expenses", function (req, res) {
  connection.query(
    "UPDATE `expenses` SET `name` =?, `type`=?, `price`=? where `id`=?",
    [req.body.name, req.body.type, req.body.price, req.body.id],
    function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

server.delete("/expenses/:id", function (req, res) {
  connection.query(
    "DELETE FROM `expenses` WHERE `id`=?",
    [req.params.id],

    function (error, results, fields) {
      if (error) throw error;
      res.end("christmas has successfully been cancelled");
    }
  );
});

server.delete("/expenses", function (req, res) {
  connection.query("DELETE FROM expenses", function (error, results, fields) {
    if (error) throw error;
    res.end("christmas has successfully been cancelled");
  });
});

// server.listen(3000, () => {
//   console.log("server is running on port 3000");
// });

server.listen(port);
console.log(`server started on port, ${port}`);
