const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties Articles and Comment collections

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

db.Article
  .remove({})
  .then(() => {
    console.log("db.Article removed");
  })
  .then(
    db.Comment
      .remove({})
      .then(() => {
        console.log("db.Comment removed");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      }))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
