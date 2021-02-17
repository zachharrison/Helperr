const router = require("express").Router();

module.exports = (db) => {
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

  router.post("/jobs", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    const {
      category_id,
      name,
      description,
      lat,
      lng,
      price,
      per_hr,
      start_time,
      end_time,
      status,
    } = request.body.jobs; // sent from FE
    db.query(
      `
      INSERT INTO jobs (category_id, name, description, lat, lng, price, per_hr, start_time, end_time, status) VALUES ($1::integer, $2::text, $3::integer, $4::integer, $5::integer, $6::integer, $7::text, $8::integer, $9::integer, $10::text)
    `,
      [
        category_id,
        name,
        description,
        lat,
        lng,
        price,
        per_hr,
        start_time,
        end_time,
        status,
      ] // Number(request.params.id) for id? idk
    )
      .then(() => {
        setTimeout(() => {
          response.status(204).json({});
          updateAppointment(Number(request.params.id), request.body.interview);
        }, 1000);
      })
      .catch((error) => console.log(error));
  });

  router.delete("/jobs", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    db.query(`DELETE FROM jobs WHERE jobs.id = $1::integer`, [
      request.params.id,
    ]).then(() => {
      setTimeout(() => {
        response.status(204).json({});
        updateAppointment(Number(request.params.id), null);
      }, 1000);
    });
  });

  return router;
};
