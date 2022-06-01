const express = require("express");
const { register, login } = require("./controllers/user.auth");
const allControllers = require("./controllers/allcontrollers");


const app = express();

app.use(express.json());
app.post("/register", register);
app.post("/login", login);

app.use("", allControllers);
module.exports = app;



