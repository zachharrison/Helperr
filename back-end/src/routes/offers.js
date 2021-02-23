const router = require("express").Router();

module.exports = (db) => {
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

  router.post("/offers", (request, response) => {
    console.log("reqbody response in offers:", request.body);
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    const { helper_id, job_id, price, pay_type, status } = request.body.offer;
    db.query(
      `
      INSERT INTO offers ( helper_id, job_id, price, pay_type, status) VALUES ($1::integer, $2::integer, $3::integer, $4::pay_type, $5::offer_status);
    `,
      [helper_id, job_id, price, pay_type, "PENDING"]
    )
      .then(() => {
        response.status(204).json({});
      })
      .catch((error) => {
        console.log("error posting offer to db: ", error);
        response.status(500).json(error);
      });
  });

  router.post("/offers/:id", (request, response) => {
    console.log("reqbody response in offers UPDATE:", request.body);
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    const offer_id = request.params.id;
    const status = request.body.offer.offer_status;

    console.log("STATUSSSS", status);

    db.query(
      `
      UPDATE offers
      SET status = $1
      WHERE id = $2;
    `,
      [status, offer_id]
    )
      .then(() => {
        response.status(204).json({});
      })
      .catch((error) => {
        response.status(500).json(error);
      });
  });

  return router;
};
