SELECT *
FROM jobs
WHERE client_id = 1;
SELECT *
FROM offers
WHERE helper_id = 1;
-- messages TO user will be offers for THEIR jobs
SELECT messages.*,
  users.name,
  jobs.name as title
FROM users
  JOIN jobs on users.id = client_id
  JOIN offers on jobs.id = job_id
  JOIN messages ON offers.id = offer_id
WHERE client_id = 1
  OR offers.helper_id = 1;

SELECT jobs.*,
  categories.name AS category_name
FROM jobs
  JOIN categories ON category_id = categories.id;

  CREATE TABLE reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  --this is who was reviewed
  job_id INTEGER REFERENCES jobs(id) ON DELETE CASCADE,
  stars review_stars,
  who review_who,
  details VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP NOT NULL DEFAULT NOW()::timestamp
);

INSERT INTO messages (user_id, offer_id, message, timestamp)
VALUES (
    2,
    1,
    'User sent an offer 2000',
    '2021-02-15T09:13:58.223Z'
  ),

INSERT INTO reviews (user_id, job_id, stars, who, details)