const dbConfig = require("./dbConfig.js");
const mysql = require("mysql");

const port = process.env.PORT || 4205;

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",

    "Access-Control-Allow-Methods": "OPTIONS, GET, POST, PUT, DELETE",
    "Access-Control-Max-Age": 86400,
    // "Content-Type": "text/plain",
    "Content-Type": "application/json",
  },
  //   port: 3306,
});
// if (port === 4205) {
//   var connection = mysql.createConnection({
//     // module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "Olivia0721",
//     DB: "thomasm",
//   });
// } else {
//   var connection = mysql.createConnection({
//     host: dbConfig.HOST,
//     user: dbConfig.USER,
//     password: dbConfig.PASSWORD,
//     database: dbConfig.DB,
//     port: 3306,
//   });
// }
// connection.connect();
// connection.connect((error) => {
//   if (error) throw error;
//   console.log("successfully connected to database");
// });

// hello
module.exports = connection;
