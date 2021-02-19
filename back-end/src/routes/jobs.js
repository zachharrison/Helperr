const router = require("express").Router();

module.exports = (db) => {
  router.get("/jobs", (request, response) => {
    db.query(
      `SELECT jobs.*, categories.name AS category_name
    FROM jobs
    JOIN categories ON category_id = categories.id;`
    ).then(({ rows: jobs }) => {
      response.json(
        jobs.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  router.post("/jobs", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    const {
      category,
      name,
      description,
      lat,
      lng,
      price,
      payType,
      startDate,
      endDate,
    } = request.body.job;
    db.query(
      `
      INSERT INTO jobs ( category_id, name, description, lat, lng, price, per_hr, status, start_time, end_time ) VALUES ($1::integer, $2::text, $3::text, $4::float, $5::float, $6::integer, $7::pay_type, $8::job_status, $9::timestamp, $10::timestamp)
    `,
      [
        category,
        name,
        description,
        lat,
        lng,
        price,
        payType,
        "POSTED",
        startDate,
        endDate,
      ]
    )
      .then(() => {
        response.status(204).json({});
      })
      .catch((error) => {
        response.status(500).json(error);
      });
  });

  router.delete("/jobs", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    db.query(`DELETE FROM jobs WHERE jobs.id = $1::integer`, [
      request.params.id,
    ]).then(() => {
      response.status(204).json({});
    });
  });

  return router;
};
