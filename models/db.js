const mongoose = require("mongoose");

//checks if we can connect to mongodb database

// database configuration
const db = require("../config/config.json").development.MONGODB_URI;

mongoose
  .connect(db, {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connection succeeded"))
  .catch((err) => console.log(err));

require("./user.model"); //we need this file to work in tandem with the user.controller.js
