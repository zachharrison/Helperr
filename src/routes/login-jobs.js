const router = require("express").Router();

module.exports = db => {
  router.get("/login/jobs/:id", (request, response) => {
    const id = request.params.id;
    db.query(`SELECT * FROM jobs WHERE client_id = $1;`, [id]).then(({rows: jobs}) => {
      response.json(jobs)
    });
  });

  return router;
};
