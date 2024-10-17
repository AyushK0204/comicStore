const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());

//route imports

const books = require("./routes/bookRoute");

app.use("/api/v1", books);

//middleware for error

app.use(errorMiddleware);

module.exports = app;
