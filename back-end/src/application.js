const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const db = require("./db");

const users = require("./routes/users");
const jobs = require("./routes/jobs");
const categories = require("./routes/categories");
const offers = require("./routes/offers");
const messages = require("./routes/messages");
const reviews = require("./routes/reviews");
const loginMessages = require("./routes/login-messages");
const loginJobs = require("./routes/login-jobs");
const loginOffers = require("./routes/login-offers");

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8",
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

module.exports = function application(ENV, actions = { updateJobs: () => {} }) {
  app.use(cors());
  app.use(helmet());
  app.use(bodyparser.json());

  app.use("/api", users(db));
  app.use("/api", jobs(db /* , actions.updateJobs */));
  app.use("/api", categories(db));
  app.use("/api", offers(db));
  app.use("/api", messages(db));
  app.use("/api", reviews(db));
  app.use("/api", offers(db));
  app.use("/api", loginMessages(db));
  app.use("/api", loginJobs(db));
  app.use("/api", loginOffers(db));

  app.get("/", (req, res) => {
    res.send({ response: "I am alive" }).status(200);
  });

  if (ENV === "development" || ENV === "test") {
    Promise.all([
      read(path.resolve(__dirname, `db/schema/create.sql`)),
      read(path.resolve(__dirname, `db/schema/${ENV}.sql`)),
    ])
      .then(([create, seed]) => {
        app.get("/api/debug/reset", (request, response) => {
          db.query(create)
            .then(() => db.query(seed))
            .then(() => {
              console.log("Database Reset");
              response.status(200).send("Database Reset");
            });
        });
      })
      .catch((error) => {
        console.log(`Error setting up the reset route: ${error}`);
      });
  }

  app.close = function () {
    return db.end();
  };

  return app;
};
