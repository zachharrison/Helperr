DROP TABLE IF EXISTS users CASCADE;
--DROP TABLE IF EXISTS offers CASCADE;
DROP TABLE IF EXISTS jobs CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
--DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS chats CASCADE;
--DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,

  name VARCHAR(255) NOT NULL,
  avatar VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
);

CREATE TABLE jobs (
  id SERIAL PRIMARY KEY NOT NULL,

  name VARCHAR(255) NOT NULL,
  lat FLOAT( 10, 6 ) NOT NULL,
  lng FLOAT( 10, 6 ) NOT NULL,
  tags VARCHAR(255) NOT NULL, --will this take an array of #'s
  requirements --might need to be a new table
  description VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  price_type INTEGER NOT NULL, -- per hour or per job
  start_time smalldatetime, -- these can be null if the job can be whenever
  end_time smalldatetime,  
  status ENUM(POSTED, FILLED, COMPLETED),   --OR status VARCHAR(255) NOT NULL,
  --quantity SMALLINT NOT NULL DEFAULT 1, --add this if we have jobs that require more than one

  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  chat_id INTEGER REFERENCES chats(id) ON DELETE CASCADE,
);

CREATE TABLE offers (
  id SERIAL PRIMARY KEY NOT NULL,

  timestamp TIMESTAMP NOT NULL DEFAULT NOW()::timestamp,
  --price INTEGER NOT NULL, --add if we are allowing counter offers

  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  job_id INTEGER REFERENCES jobs(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY NOT NULL,

  description VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP NOT NULL DEFAULT NOW()::timestamp,
  --price INTEGER NOT NULL, --only if we are allowing counter offers

  helpme_id INTEGER REFERENCES users(id) ON DELETE CASCADE, --wtf do we do here!
  helper_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  job_id INTEGER REFERENCES jobs(id) ON DELETE CASCADE,
);

CREATE TABLE chats (
  id SERIAL PRIMARY KEY NOT NULL,

  helpme_id INTEGER REFERENCES users(id) ON DELETE CASCADE, --wtf do we do here!
  helper_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  job_id INTEGER REFERENCES jobs(id) ON DELETE CASCADE,
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  message VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP NOT NULL DEFAULT NOW()::timestamp,

  chat_id INTEGER REFERENCES chats(id) ON DELETE CASCADE,
);