const router = require("express").Router();

module.exports = db => {
  router.get("/jobs", (request, response) => {
    db.query(`SELECT * FROM jobs`).then(({ rows: jobs }) => {
      response.json(
        jobs.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  return router;
};
