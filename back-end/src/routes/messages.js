const router = require("express").Router();

module.exports = (db) => {
  router.get("/messages", (request, response) => {
    db.query(`SELECT * FROM messages`).then(({ rows: categories }) => {
      response.json(
        categories.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  return router;
};
