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