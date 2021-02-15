INSERT INTO users (name, avatar, email, password )
VALUES ('BobTheBuilder', 'https://github.com/zachharrison/helperr/blob/master/front-end/public/avatars/bob-the-builder.png?raw=true', 'Bob@BobsBuilding.com', 'password'),
('Mrs.Doubtfire', 'https://github.com/zachharrison/helperr/blob/master/front-end/public/avatars/mrs-doubtfire.png?raw=true', 'robinwilliams@ripthegoat.com', 'password'),
('Harry n'' Marv', 'https://github.com/zachharrison/helperr/blob/master/front-end/public/avatars/the-wet-bantis-homealone.png?raw=true', 'harrynmarv@notascam.com', 'password'),
('Tom Brady', 'https://github.com/zachharrison/helperr/blob/master/front-end/public/avatars/tom-brady.png?raw=true', 'Tom@balldeflator.com', 'password');

INSERT INTO categories (name)
VALUES ('Light-labour'),
('Cleaning'),
('Caregiving'),
('AutoRepair'),
('MinorRepair'),
('Photography'),
('Lessons'),
('Delivery'),
('Miscellaneous');

INSERT INTO jobs (client_id, helper_id, category_id, name, description, lat, lng, price, per_hr, start_time, end_time, status)
VALUES (1, 2, 3, 'Babysit a lil'' brat', 'Take care of this POS for me thanks', 49.281290, 123.115121, 1000, 'FALSE', '2021-02-26 18:00:00', '2021-02-27 00:00:00', 'POSTED');


INSERT INTO offers (helper_id, job_id, price, per_hr, status)
VALUES (2, 1, 2000, 'TRUE', 'ACCEPTED'); -- doubfire takes care of BTB kid

INSERT INTO messages (user_id, offer_id, message)
VALUES (1, 1, 'Yo! I''m a woman'),
(2, 1, 'Um ok?');

INSERT INTO reviews (user_id, job_id, stars, who, details)
VALUES (2, 1, '5', 'helper', 'RIP Robin Williams');

-- GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO labber;