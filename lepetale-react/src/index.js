const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
  database: "database_name",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database!");
});

module.exports = connection;
