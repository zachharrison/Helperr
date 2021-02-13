DROP TABLE IF EXISTS users CASCADE;
--DROP TABLE IF EXISTS offers CASCADE;
DROP TABLE IF EXISTS jobs CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
--DROP TABLE IF EXISTS reviews CASCADE;
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

  client_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  helper_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,

  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  lat FLOAT( 10, 6 ) NOT NULL,
  lng FLOAT( 10, 6 ) NOT NULL,
  price INTEGER NOT NULL,
  per_hr BOOLEAN DEFAULT 'FALSE',  -- per hour or per job
  start_time smalldatetime, 
  end_time smalldatetime,  
  --tags VARCHAR(255) NOT NULL, --will this take an array of #'s
  --req --add this if they need a car or whatever
  --quantity SMALLINT NOT NULL DEFAULT 1, --add this if we have jobs that require more than one

  status ENUM('POSTED', 'FILLED', 'COMPLETED'),
  timestamp TIMESTAMP NOT NULL DEFAULT NOW()::timestamp,
);

CREATE TABLE offers (
  id SERIAL PRIMARY KEY NOT NULL,

  helper_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  job_id INTEGER REFERENCES jobs(id) ON DELETE CASCADE,

  price INTEGER NOT NULL, --add if we are allowing counter offers
  per_hr BOOLEAN DEFAULT 'FALSE',  -- per hour or per job

  status ENUM('SENT', 'ACCEPTED', 'DECLINED'),
  timestamp TIMESTAMP NOT NULL DEFAULT NOW()::timestamp,
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY NOT NULL,

  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, --this is who was reviewed
  job_id INTEGER REFERENCES jobs(id) ON DELETE CASCADE,

  type ENUM('helper', 'client'),
  stars ENUM('0','1','2','3','4','5'),
  details VARCHAR(255) NOT NULL,

  timestamp TIMESTAMP NOT NULL DEFAULT NOW()::timestamp,
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  chat_id INTEGER REFERENCES chats(id) ON DELETE CASCADE,

  message VARCHAR(255) NOT NULL,

  timestamp TIMESTAMP NOT NULL DEFAULT NOW()::timestamp,
);