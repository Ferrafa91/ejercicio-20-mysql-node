require("dotenv").config();

const express = require("express");
const app = express();
const router = require("./routes/routes");
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/usuarios", router);
app.listen(port, function (req, res) {
  console.log(
    `http://localhost:${port}, "El servidor esta corriendo  en servidor ${port}"`
  );
});
