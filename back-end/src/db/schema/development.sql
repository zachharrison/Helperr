INSERT INTO users (name, avatar, email, password)
VALUES (
    'Mrs.Doubtfire',
    'https://github.com/zachharrison/helperr/blob/master/front-end/public/avatars/mrs-doubtfire.png?raw=true',
    'robinwilliams@ripthegoat.com',
    'password'
  ),
  (
    'BobTheBuilder',
    'https://github.com/zachharrison/helperr/blob/master/front-end/public/avatars/bob-the-builder.png?raw=true',
    'Bob@BobsBuilding.com',
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
    start_date,
    end_date,
    status
  )
VALUES (
    1,
    2,
    1,
    'Furniture mover',
    'I have recently purchased a beautiful new couch, and need someone who can help me cary it up 4 flights of stars to my appartment',
    45.631060,
    -122.671570,
    10000,
    ' total',
    '2021-02-26',
    '2021-02-27',
    'COMPLETED'
  ),
  (
    1,
    3,
    5,
    'Locksmith needed',
    'Please fix our back door lock before we leave on vacation!',
    49.275338,
    -123.1491361,
    10000,
    ' total',
    '2021-03-04',
    '2021-03-08',
    'FILLED'
  ),
  (
    1,
    null,
    8,
    'Grocery shopping',
    'I''m an old lady and need someone to do my grocery shopping and deliver to my house.',
    49.278300,
    -123.126520,
    1000,
    '/hr',
    '2021-02-26',
    '2021-02-27',
    'POSTED'
  ),
  (
    2,
    1,
    3,
    'Babysit a lil brat',
    'Take care of this POS for me thanks',
    49.281290,
    -123.115121,
    1000,
    '/hr',
    '2021-02-26',
    '2021-02-27',
    'COMPLETED'
  ),
  (
    2,
    null,
    9,
    'Need marriage counselor',
    'It seems like I can fix just about anything but my marriage, PLEASE HELP!',
    48.6150804,
    -123.419924,
    15000,
    ' total',
    '2021-02-26',
    '2021-02-27',
    'POSTED'
  ),
  (
    2,
    4,
    7,
    'Teach my uncoordinated son to throw a football',
    'He''s really bad at sports.. not even sure he''s mine',
    49.3042584,
    -123.1442522,
    2000,
    '/hr',
    '2021-02-26',
    '2021-02-27',
    'FILLED'
  ),
  (
    3,
    1,
    3,
    'Caregiver needed during recovery from fall ',
    'We both tripped on some hotwheels then fell down the stairs onto some Lego.. Need a gental caregiver to help us eat and go to the washroom during our long road to physical rehabilitation',
    49.281290,
    123.115121,
    5000,
    '/hr',
    '2021-02-26',
    '2021-02-27',
    'COMPLETED'
  ),
  (
    3,
    null,
    7,
    'Flute lessons',
    'For years my mom has wanted to be able to play the flute, looking for someone with some experience to teach her. She has never played one before but we got her one for Christmas, dont think she needs anything else.',
    49.2944647,
    -123.150173,
    5000,
    '/hr',
    '2021-02-26',
    '2021-02-27',
    'POSTED'
  ),
  (
    4,
    1,
    7,
    'Teach me how to cook',
    'I would love to learn how to cook so that I can feed my family something other than cereal. Someone please teach me how to make an egg without burning it, or myself...',
    49.282740,
    -123.133260,
    150,
    ' total',
    '2021-02-20',
    '2021-02-27',
    'COMPLETED'
  ),
  (
    4,
    null,
    4,
    'Put my bumper back on',
    'My son is learning how to drive and backed into my garage, would really appreciate if someone could help me re-attach my bumper. Should be pretty easy, not too worried about how it looks as long as its on',
    49.282740,
    -123.133260,
    150,
    ' total',
    '2021-02-20',
    '2021-02-27',
    'COMPLETED'
  ),
  (
    4,
    null,
    6,
    'Take profesional photo''s of my Super Bowl trophies',
    'I have just won yet another Super Bowl, and am in need of a photographer to take some photo''s of my collection',
    49.280470,
    -123.123200,
    10000,
    ' total',
    '2021-02-26',
    '2021-02-27',
    'POSTED'
  ),
  (
    3,
    null,
    2,
    'Party Cleanup',
    'We went away for the weekend, and our teenagers threw a party without our knowledge. Apparently they couldn''t be bothered to clean up their own mess, so hoping to find someone to help with it. Funds will be coming out of their own pockets!',
    49.281230,
    -123.132590,
    100,
    '/hr',
    '2021-02-24',
    '2021-03-01',
    'POSTED'
  ),
  (
    3,
    2,
    1,
    'Fix my broken stove',
    'I bought a brand new stove just 3 weeks ago and it has already stopped working. In need of someone handy who can fix it!',
    49.272260,
    -123.153460,
    10000,
    ' total',
    '2021-02-26',
    '2021-02-27',
    'FILLED'
  ),
  (
    3,
    null,
    6,
    'Actor headshots',
    'Its been a while since I''ve got some new headshots, and getting them done through a company can be quite expensive. Hoping to save some cash, and you can use my photos for your portfolio!',
    49.264080,
    -123.151230,
    100,
    ' total',
    '2021-02-26',
    '2021-03-02',
    'POSTED'
  ),
  (
    4,
    null,
    3,
    'Cook my wife a delicious dinner',
    'My anniversary is coming up and I wanted to cook my wife a romantic dinner, but I have no cooking skills. Hoping someone can come over during the day so it will be ready when she gets home',
    49.261320, 
    -123.113940,
    200,
    ' total',
    '2021-02-26',
    '2021-03-19',
    'POSTED'
  ),
  (
    4,
    null,
    5,
    'I put pasta in my toaster and now its broken!',
    'My microwave broke after I tried to heat up some cutlery, so I tired to cook pasta in my toaster and now that doesn''t work either.. SOmeone please fix it!',
    49.271600, 
    -123.106500,
    100,
    ' total',
    '2021-02-26',
    '2021-03-01',
    'POSTED'
  ),
  (
    3,
    null,
    8,
    'Pickup groceries from granville market',
    'I''ve been meaning to pick up some fresh produce, but haven''t been able to make it down there. Would really appreciate some help!',
    49.2727014, 
    -123.1352146,
    100,
    ' total',
    '2021-02-26',
    '2021-03-08',
    'POSTED'
  ),
  (
    4,
    null,
    9,
    'Dropped my iphone in the Vancouver aquarium!',
    'I need a scuba diver to get it for me',
    49.3007961, 
    -123.1309293,
    100,
    ' total',
    '2021-02-26',
    '2021-03-07',
    'POSTED'
  ),
  (
    4,
    null,
    4,
    'I hit a pothole and now my car is upside down!',
    'Need a bodybuilder or mechanic to help me flip it back onto its wheels!',
    49.275338, 
    -123.1491361,
    100,
    ' total',
    '2021-02-26',
    '2021-03-05',
    'POSTED'
  ),
  (
    2,
    null,
    1,
    'Need someone to hold the ladder while',
    'Need a bodybuilder or mechanic to help me flip it back onto its wheels!',
    49.2900541, 
    -123.1376043,
    100,
    ' total',
    '2021-03-15',
    '2021-03-16',
    'POSTED'
  );
  
INSERT INTO offers (helper_id, job_id, price, pay_type, status)
VALUES (2, 1, 2000, '/hr', 'REVIEWED'),
  (3, 1, 3000, '/hr', 'PENDING'),
  (4, 1, 3000, '/hr', 'PENDING'),
  (4, 2, 15000, ' total', 'PENDING'),
  (3, 2, 2500, ' total', 'ACCEPTED'),
  (2, 2, 2500, ' total', 'PENDING'),
  (2, 3, 2000, '/hr', 'PENDING'),
  (4, 3, 20000, '/hr', 'PENDING'),
  (5, 5, 2000, '/hr', 'PENDING'),
  (1, 4, 20000, '/hr', 'REVIEWED'),
  (3, 4, 20000, '/hr', 'PENDING'),
  (4, 4, 2000, '/hr', 'PENDING'),
  (4, 5, 20000, '/hr', 'PENDING'),
  (3, 5, 20000, '/hr', 'PENDING'),
  (3, 6, 100000, ' total', 'PENDING'),
  (4, 6, 10000, '/hr', 'ACCEPTED'),
  (1, 6, 10000, '/hr', 'PENDING'),
  (1, 7, 20000, '/hr', 'REVIEWED'),
  (2, 7, 1212, ' total', 'PENDING'),
  (4, 8, 20000, '/hr', 'PENDING'),
  (2, 8, 1250, ' total', 'REVIEWED');
INSERT INTO messages (user_id, offer_id, message, timestamp)
VALUES (
    2,
    1,
    'User sent an offer of $10000',
    '2021-02-17T09:14:39.223Z'
  ),
  (
    2,
    1,
    'Hello, I''m interested in your job to help you move your furniture. Let me know I''m available anytime!',
    '2021-02-18T09:14:45.223Z'
  ),
  (
    1,
    1,
    'Perfect, let''s talk in the morning then',
    '2021-02-21T09:14:39.223Z'
  ),
  (
    1,
    15,
    'User sent an offer - $2000',
    '2021-02-20T09:15:39.223Z'
  ),
  (
    1,
    15,
    'Hey, I think I might be able to help you out, I know it''s a tough situation. Let''s chat and see if we might be a good fit',
    '2021-02-21T09:15:39.223Z'
  ),
  (
    3,
    15,
    'I''m willing to try anything at this point, I know we can get through this! If you''re okay with the price let''s find a time that works.',
    '2021-02-22T09:15:39.223Z'
  ),
  (
    2,
    7,
    'User sent an offer: $2000',
    '2021-02-20T09:15:39.223Z'
  );
INSERT INTO reviews (helper_id, job_id, stars, details, timestamp)
VALUES (
    2,
    1,
    5,
    'Bob did such a great job lifting my beautiful victoria era, hardwood, 7 seat sectional couch up the stairs up the 10 flights of stairs to my appartment, I gave him a lemonade as a tip for all his hardwork',
    '2021-02-27 24:00:00'
  ),
  (
    1,
    4,
    3,
    'Mrs.Doubtfire did a great job babysitting.. but she left the toliet seat up and now my wife is asking for a divorce!',
    '2021-02-27 24:00:00'
  ),
  (
    1,
    7,
    5,
    'After Marv and I were seriously injured by some hotwheels Mrs.Doubtfire helped us get back to contracting for our lovely community!',
    '2021-02-27 24:00:00'
  ),
  (
    1,
    8,
    1,
    'I booked Mrs.Doubtfire to teach me how to cook for my family and she lit my house onfire during our first lesson! She even left the toliet seat up and I fell into it the night before the superbowl! DO NOT BOOK HER',
    '2021-02-27 24:00:00'
  );
-- VALUES (
--     2,
--     1,
--     'User sent an offer 2000',
--     '2021-02-15T09:13:58.223Z'
--   ),
--   (
--     4,
--     2,
--     'User sent an offer 3000',
--     '2021-02-16T09:12:38.223Z'
--   ),
--   (
--     4,
--     4,
--     'User sent an offer 2000',
--     '2021-02-16T09:12:38.223Z'
--   ),
--   (
--     3,
--     5,
--     'User sent an offer 20000',
--     '2021-02-15T09:12:38.223Z'
--   ),
--   (
--     2,
--     5,
--     'User sent an offer 3000',
--     '2021-02-17T09:16:42.223Z'
--   ),
--   (
--     4,
--     6,
--     'User sent an offer 2500',
--     '2021-02-17T09:14:39.223Z'
--   ),
--   (
--     2,
--     1,
--     'Hey I am available to fill your babysitting position!',
--     '2021-02-17T09:12:38.223Z'
--   ),
--   (
--     1,
--     1,
--     'Sounds great!',
--     '2021-02-17T09:14:28.223Z'
--   ),
--   (
--     3,
--     2,
--     'I am very intrested in your position!',
--     '2021-02-18T09:12:38.223Z'
--   ),
--   (
--     4,
--     3,
--     'Lets chat tomorrow',
--     '2021-02-17T09:12:38.223Z'
--   );
-- GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO labber;
-- "timestamp": "2021-02-18T09:12:38.223Z",