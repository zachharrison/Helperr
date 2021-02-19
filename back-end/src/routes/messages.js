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

  router.post("/messages", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    const {
      offer_id, 
      message, 
      user_id
    } = request.body.message;
    db.query(
      `
      INSERT INTO messages (user_id, offer_id, message)
      VALUES ($1, $2, $3);
    `,
      [
        +user_id,
        offer_id,
        message
       ]
    )
      .then(() => {
        response.status(204).json({});
      })
      .catch((error) => {
        console.log("Error adding message: ", error)
      });
  });

  return router;
};
