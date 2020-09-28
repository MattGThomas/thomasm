const mysql = require("mysql");
const dbConfig = require("./config/dbConfig");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const server = express();

server.use(bodyParser.json());
server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("successfully connected to database");
});

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
      //   return res.send({ error: false, data: JSON.stringify(results[0]) });
    }
  );
});

server.post("/expenses", function (req, res) {
  let params = req.body;
  console.log(params);
  connection.query("INSERT INTO expenses SET ?", params, function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

server.put("/expenses/:id", function (req, res) {
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
  console.log(req.body);
  connection.query(
    "DELETE FROM `expenses` WHERE `id`=?",
    [req.body.id],
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

// require("./expenses/expenses-router.js")(server);
server.listen(3000, () => {
  console.log("server is running on port 3000");
});
