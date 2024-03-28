const mongoose = require("mongoose");

const DB = process.env.MONGO_URI;

mongoose
  .connect(DB, {})
  .then(() => console.log("Database connected"))
  .catch((err) => {
    console.log("errr", err);
  });
