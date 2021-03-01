const router = require("express").Router();

module.exports = db => {
  router.get("/login/:id", (request, response) => {
    const id = request.params.id;
    db.query(`SELECT messages.*, users.name, jobs.name as title
    FROM users
    JOIN jobs on users.id = client_id
    JOIN offers on jobs.id = job_id
    JOIN messages ON offers.id = offer_id
    WHERE client_id = 1 OR offers.helper_id = 1;`).then(({rows: messages}) => {
      response.json(messages)
    });
  });

  return router;
};
