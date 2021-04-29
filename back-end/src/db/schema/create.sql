DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS offers CASCADE;
DROP TABLE IF EXISTS jobs CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS messages CASCADE;
DROP TYPE IF EXISTS job_status;
DROP TYPE IF EXISTS offer_status;
DROP TYPE IF EXISTS review_stars;
DROP TYPE IF EXISTS review_who;
DROP TYPE IF EXISTS pay_type;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  avatar VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  marker VARCHAR(255) NOT NULL
);
CREATE TYPE job_status AS ENUM('POSTED', 'FILLED', 'COMPLETED');
CREATE TYPE pay_type AS ENUM('/hr', ' total');
CREATE TABLE jobs (
  id SERIAL PRIMARY KEY NOT NULL,
  client_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  helper_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  lat FLOAT,
  lng FLOAT,
  price INTEGER NOT NULL,
  pay_type pay_type,
  start_date TIMESTAMP,
  end_date TIMESTAMP,
  status job_status,
  timestamp TIMESTAMP NOT NULL DEFAULT NOW()::timestamp
);
CREATE TYPE offer_status AS ENUM('PENDING', 'ACCEPTED', 'DECLINED', 'REVIEWED');
CREATE TABLE offers (
  id SERIAL PRIMARY KEY NOT NULL,
  helper_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  job_id INTEGER REFERENCES jobs(id) ON DELETE CASCADE,
  price INTEGER NOT NULL,
  --add if we are allowing counter offers
  pay_type pay_type,
  -- per hour or per job
  status offer_status,
  timestamp TIMESTAMP NOT NULL DEFAULT NOW()::timestamp
);
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  helper_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  --this is who was reviewed
  job_id INTEGER REFERENCES jobs(id) ON DELETE CASCADE,
  stars INTEGER,
  details VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP NOT NULL DEFAULT NOW()::timestamp
);
CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  offer_id INTEGER REFERENCES offers(id) ON DELETE CASCADE,
  message VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP NOT NULL DEFAULT NOW()::timestamp
);