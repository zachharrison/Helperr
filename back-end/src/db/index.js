const pg = require("pg");

const client = new pg.Client({
  // user: process.env.PGUSER,
  // password: process.env.PGPASSWORD, /* Add these for local dep */
  // database: process.env.PGDATABASE,
  connectionString: process.env.DATABASE_URL || "",
  ssl: { rejectUnauthorized: false },
});

client
  .connect()
  .catch((e) => console.log(`Error connecting to Postgres server:\n${e}`));
module.exports = client;
