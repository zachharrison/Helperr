const router = require("express").Router();

module.exports = db => {
  router.get("/offers", (request, response) => {
    db.query(`SELECT * FROM offers`).then(({ rows: messages }) => {
      response.json(
        messages.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  return router;
};