INSERT INTO users (username, email, avatar, password )
VALUES ('BobTheBuilder', 'https://github.com/AdamTranquilla/Food-Pick-up-Ordering/blob/master/public/img/Pizza-Toss.png?raw=true', 'Bob@BobsBuilding.com', 'password'),
('Mrs.Doubtfire', 'https://github.com/AdamTranquilla/Food-Pick-up-Ordering/blob/master/public/img/Pizza-Toss.png?raw=true', 'robinwilliams@ripthegoat.com', 'password'),
("Harry n' Marv", 'https://github.com/AdamTranquilla/Food-Pick-up-Ordering/blob/master/public/img/Pizza-Toss.png?raw=true', 'harrynmarv@notascam.com', 'password'),
('Tom Brady', 'https://github.com/AdamTranquilla/Food-Pick-up-Ordering/blob/master/public/img/Pizza-Toss.png?raw=true', 'Tom@balldeflator.com', 'password');


INSERT INTO jobs (name, lat, lng, description, price, per_hr, start_time, end_time, status, tags, user_id, category_id)
VALUES ("Babysit a lil' brat", 49.281290, 123.115121, [],  1000, 'TRUE', '2021-02-26 18:00:00', '2021-02-27 00:00:00', 'POSTED', 1, 1);

INSERT INTO offers ( user_id, chat_id)
VALUES ( 1, 1);

INSERT INTO categories (name)
VALUES ('Light-labour'),
('Cleaning'),
('AutoRepair'),
('MinorRepair'),
('Photographer'),
('Lessons'),
('Training'),
('Miscellaneous');

INSERT INTO reviews (description, stars, helpme_id, helper_id, job_id)
VALUES ('Take care of this POS for me thanks'),


GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO labber;