const mysql = require("mysql2");
const express = require("express");
const router = express.Router();

/////////////// RUTA PARA TRAER A TODOS LOS USUARIOS DE LA DATABASE  /////////////////
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

router.get("/crear", (req, res) => {
  res.render("crear");
});
router.post("/crear", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "ha_ejercicio_20",
  });
  connection.query(
    "INSERT INTO users (firstname,lastname,age) VALUES(?,?,?)",
    [req.body.createName, req.body.createLastName, req.body.createAge],
    function (error, response) {
      if (error) {
        throw error;
      } else {
        res.redirect("/usuarios");
      }
    }
  );
});

router.get("/editar/:id", (req, res) => {
  res.render("editar");
});

router.post("/editar/:id", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "ha_ejercicio_20",
  });
  connection.query(
    "UPDATE users SET firstname=?,lastname=?,age=? WHERE ID=?",
    [
      req.body.createName,
      req.body.createLastName,
      req.body.createAge,
      req.params.id,
    ],
    function (error, response) {
      if (error) {
        throw error;
      } else {
        res.redirect("/usuarios");
      }
    }
  );
});

router.get("/eliminar/:id", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "ha_ejercicio_20",
  });
  connection.query(
    "DELETE FROM users WHERE id=?",
    [req.params.id],
    function (error, response) {
      if (error) {
        throw error;
      } else {
        res.redirect("/usuarios");
      }
    }
  );
});

module.exports = router;
