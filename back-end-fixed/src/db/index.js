const pg = require("pg");

const client = new pg.Client({
  // connectionString: process.env.DATABASE_URL || ""
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});

client
  .connect()
  .catch((e) => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
