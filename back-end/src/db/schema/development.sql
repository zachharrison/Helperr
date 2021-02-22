INSERT INTO users (name, avatar, email, password)
VALUES (
    'BobTheBuilder',
    'https://github.com/zachharrison/helperr/blob/master/front-end/public/avatars/bob-the-builder.png?raw=true',
    'Bob@BobsBuilding.com',
    'password'
  ),
  (
    'Mrs.Doubtfire',
    'https://github.com/zachharrison/helperr/blob/master/front-end/public/avatars/mrs-doubtfire.png?raw=true',
    'robinwilliams@ripthegoat.com',
    'password'
  ),
  (
    'Harry n'' Marv',
    'https://github.com/zachharrison/helperr/blob/master/front-end/public/avatars/the-wet-bantis-homealone.png?raw=true',
    'harrynmarv@notascam.com',
    'password'
  ),
  (
    'Tom Brady',
    'https://github.com/zachharrison/helperr/blob/master/front-end/public/avatars/tom-brady.png?raw=true',
    'Tom@balldeflator.com',
    'password'
  );
INSERT INTO categories (name, marker)
VALUES ('Light-labour', '/hard-hat-solid.svg'),
  ('Cleaning', '/hand-sparkles-solid.svg'),
  ('Caregiving', '/baby-carriage-solid.svg'),
  ('AutoRepair', '/car-crash-solid.svg'),
  ('MinorRepair', '/tools-solid.svg'),
  ('Photography', '/camera-retro-solid.svg'),
  ('Lessons', '/user-graduate-solid.svg'),
  ('Delivery', '/shipping-fast-solid.svg'),
  ('Miscellaneous', '/question-solid.svg');
INSERT INTO jobs (
    client_id,
    helper_id,
    category_id,
    name,
    description,
    lat,
    lng,
    price,
    pay_type,
    start_time,
    end_time,
    status
  )
VALUES (
    1,
    2,
    3,
    'Babysit a lil brat',
    'Take care of this POS for me thanks',
    49.281290,
    -123.115121,
    1000,
    '/hr',
    '2021-02-26 18:00:00',
    '2021-02-27 24:00:00',
    'POSTED'
  ),
  (
    3,
    2,
    8,
    'Grocery shopping',
    'Need someone to do my grocery shopping and deliver to my house.',
    49.278300,
    -123.126520,
    1000,
    '/hr',
    '2021-02-26 18:00:00',
    '2021-02-27 24:00:00',
    'FILLED'
  ),
  (
    4,
    3,
    4,
    'Fix my flat tire',
    'In need of a helper who can put on my spare tire for me!',
    48.428421,
    -123.3656461,
    15000,
    ' total',
    '2021-02-26 18:00:00',
    '2021-02-27 24:00:00',
    'COMPLETED'
  ),
  (
    3,
    null,
    7,
    'Flute lessons',
    'For years my mom has wanted to be able to play the flute, looking for someone with some experience to teach her. She has never played one before but we got her one for Christmas, dont think she needs anything else.',
    49.281290,
    123.115121,
    5000,
    '/hr',
    '2021-02-26 18:00:00',
    '2021-02-27 24:00:00',
    'POSTED'
  ),
  (
    2,
    null,
    1,
    'Furniture mover',
    'I have recently purchased a beautiful new couch, and need someone who can help me cary it up 4 flights of stars to my appartment',
    45.631060,
    -122.671570,
    10000,
    ' total',
    '2021-02-26 18:00:00',
    '2021-02-27 24:00:00',
    'POSTED'
  ),
  (
    1,
    null,
    5,
    'Locksmith needed',
    'Please fix our back door lock before we leave on vacation!',
    49.275338,
    -123.1491361,
    10000,
    ' total',
    '2021-03-04 18:00:00',
    '2021-03-08 18:00:00',
    'POSTED'
  ),
  (
    1,
    null,
    7,
    'Teach my uncoordinated son to throw a football',
    'He''s really bad at sports.. not even sure he''s mine',
    49.3042584,
    -123.1442522,
    2000,
    '/hr',
    '2021-02-26 18:00:00',
    '2021-02-27 24:00:00',
    'POSTED'
  ),
  (
    1,
    3,
    4,
    'Put my bumper back on',
    'My son is learning how to drive and backed into my garage, would really appreciate if someone could help me re-attach my bumper. Should be pretty easy, not too worried about how it looks as long as its on',
    49.282740,
    -123.133260,
    150,
    ' total',
    '2021-02-20 18:00:00',
    '2021-02-27 24:00:00',
    'COMPLETED'
  );
INSERT INTO offers (helper_id, job_id, price, pay_type, status)
VALUES (2, 1, 2000, '/hr', 'PENDING'),
  (1, 2, 15000, ' total', 'PENDING'),
  (2, 3, 2000, '/hr', 'PENDING'),
  (3, 5, 20000, '/hr', 'ACCEPTED'),
  (4, 1, 3000, '/hr', 'DECLINED'),
  (4, 2, 2500, ' total', 'PENDING'),
  (3, 6, 100000, ' total', 'ACCEPTED'),
  (4, 6, 10000, '/hr', 'PENDING'),
  (2, 7, 3000, '/hr', 'PENDING'),
  (4, 7, 1212, ' total', 'DECLINED'),
  (3, 8, 150, ' total', 'ACCEPTED');
INSERT INTO messages (user_id, offer_id, message, timestamp)
VALUES (
    2,
    1,
    'User sent an offer 2000',
    '2021-02-15T09:13:58.223Z'
  ),
  -- 2 sends message to 1 for offer 1
  (
    2,
    2,
    'User sent an offer 15000',
    '2021-02-16T09:12:38.223Z'
  ),
  (
    2,
    3,
    'User sent an offer 2000',
    '2021-02-16T09:12:38.223Z'
  ),
  (
    3,
    4,
    'User sent an offer 20000',
    '2021-02-15T09:12:38.223Z'
  ),
  (
    2,
    5,
    'User sent an offer 3000',
    '2021-02-17T09:16:42.223Z'
  ),
  (
    4,
    6,
    'User sent an offer 2500',
    '2021-02-17T09:14:39.223Z'
  ),
  (
    2,
    1,
    'Hey I am available to fill your babysitting position!',
    '2021-02-17T09:12:38.223Z'
  ),
  (
    1,
    1,
    'Sounds great!',
    '2021-02-17T09:14:28.223Z'
  ),
  (
    3,
    2,
    'I am very intrested in your position!',
    '2021-02-18T09:12:38.223Z'
  ),
  (
    4,
    3,
    'Lets chat tomorrow',
    '2021-02-17T09:12:38.223Z'
  );
-- GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO labber;
-- "timestamp": "2021-02-18T09:12:38.223Z",
INSERT INTO reviews (helper_id, job_id, stars, details, timestamp)
VALUES (
    4,
    3,
    5,
    'Was on my way to go win another Super Bowl when I ran over a nail on the freeway. Without the help of Harry and Marv I would not be able to bring home the Lombardi trophy for the seventh time!',
    '2021-02-27 24:00:00'
  );