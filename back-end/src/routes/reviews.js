const router = require("express").Router();

module.exports = (db) => {
  router.get("/reviews", (request, response) => {
    db.query(
      `SELECT reviews.*, jobs.name, users.name AS reviewer
    FROM reviews
    JOIN jobs ON jobs.id = job_id
    JOIN users ON jobs.client_id = users.id;`
    ).then(({ rows: messages }) => {
      response.json(
        messages.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  router.post("/reviews", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    const { helper_id, job_id, stars, details } = request.body.review;
    db.query(
      `
      INSERT INTO reviews ( helper_id, job_id, stars, details) VALUES ($1::integer, $2::integer, $3::integer, $4::text);
    `,
      [helper_id, job_id, stars, details]
    )
      .then(() => {
        response.status(204).json({});
      })
      .catch((error) => {
        console.log("error posting offer to db: ", error);
        response.status(500).json(error);
      });
  });

  return router;
};
