const mysql = require("mysql2");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "ha_ejercicio_20",
  });
  connection.query("SELECT * FROM users", function (error, users) {
    if (error) {
      throw error;
    } else {
      res.render("usuarios", { users });
    }
  });
});

module.exports = router;
