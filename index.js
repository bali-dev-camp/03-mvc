const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const route = require("./routers");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "./public")));

app.set("view engine", "ejs");

app.use(route);

app.listen(3000, () => {
  console.log("Running on localhost:3000");
});
