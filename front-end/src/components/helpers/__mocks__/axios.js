const fixtures = {
  users: {
    1: {
      id: 1,
      name: "BobTheBuilder",
      avatar:
        "https://github.com/zachharrison/helperr/blob/master/front-end/public/avatars/bob-the-builder.png?raw=true",
      email: "Bob@BobsBuilding.com",
      password: "password",
    },
    2: {
      id: 2,
      name: "Mrs.Doubtfire",
      avatar:
        "https://github.com/zachharrison/helperr/blob/master/front-end/public/avatars/mrs-doubtfire.png?raw=true",
      email: "robinwilliams@ripthegoat.com",
      password: "password",
    },
    3: {
      id: 3,
      name: "Harry n' Marv",
      avatar:
        "https://github.com/zachharrison/helperr/blob/master/front-end/public/avatars/the-wet-bantis-homealone.png?raw=true",
      email: "harrynmarv@notascam.com",
      password: "password",
    },
    4: {
      id: 4,
      name: "Tom Brady",
      avatar:
        "https://github.com/zachharrison/helperr/blob/master/front-end/public/avatars/tom-brady.png?raw=true",
      email: "Tom@balldeflator.com",
      password: "password",
    },
  },
  jobs: {
    1: {
      id: 1,
      client_id: 1,
      helper_id: 2,
      category_id: 3,
      name: "Babysit a lil' brat",
      description: "Take care of this POS for me thanks",
      lat: 49.28129,
      lng: -123.115121,
      price: 1000,
      pay_type: "FALSE",
      start_time: "2021-02-26 18:00:00",
      end_time: "2021-02-27 00:00:00",
      status: "POSTED",
    },
    2: {
      id: 2,
      client_id: 2,
      helper_id: 4,
      category_id: 7,
      name: '"fix" kids football',
      description: "please suck some air out of my footballs",
      lat: 49.22129,
      lng: -123.105121,
      price: 2000,
      pay_type: "TRUE",
      start_time: "2021-02-27 12:00:00",
      end_time: "2021-02-27 12:00:00",
      status: "POSTED",
    },
  },
  categories: {
    1: {
      id: 1,
      name: "Light-labour",
    },
    2: {
      id: 2,
      name: "Cleaning",
    },
    3: {
      id: 3,
      name: "Caregiving",
    },
    4: {
      id: 4,
      name: "AutoRepair",
    },
    5: {
      id: 5,
      name: "MinorRepair",
    },
    6: {
      id: 6,
      name: "Photography",
    },
    7: {
      id: 7,
      name: "Lessons",
    },
    8: {
      id: 8,
      name: "Delivery",
    },
    9: {
      id: 9,
      name: "Miscellaneous",
    },
  },
  offers: {
    1: {
      id: 1,
      helper_id: 2,
      job_id: 1,
      price: 2000,
      pay_type: "TRUE",
      status: "ACCEPTED",
    },
  },
  reviews: {
    1: {
      id: 1,
      user_id: 2,
      job_id: 1,
      stars: 5,
      type: "helper",
      details: "details",
    },
  },
  chats: [
    {
      id: 1,
      user_id: 2,
      offer_id: 1,
      message: "User sent an offer 2000",
      timestamp: "2021-02-15T17:13:58.223Z",
      name: "BobTheBuilder",
      title: "Babysit a lil brat",
    },
    {
      id: 8,
      user_id: 1,
      offer_id: 1,
      message: "Sounds great!",
      timestamp: "2021-02-15T17:14:28.223Z",
      name: "BobTheBuilder",
      title: "Babysit a lil brat",
    },
    {
      id: 2,
      user_id: 1,
      offer_id: 2,
      message: "User sent an offer 15000",
      timestamp: "2021-02-16T17:12:38.223Z",
      name: "Harry n' Marv",
      title: "Grocery shopping",
    },
    {
      id: 7,
      user_id: 2,
      offer_id: 1,
      message: "Hey I am available to fill your babysitting position!",
      timestamp: "2021-02-17T17:12:38.223Z",
      name: "BobTheBuilder",
      title: "Babysit a lil brat",
    },
    {
      id: 5,
      user_id: 2,
      offer_id: 5,
      message: "User sent an offer 3000",
      timestamp: "2021-02-17T17:16:42.223Z",
      name: "BobTheBuilder",
      title: "Babysit a lil brat",
    },
    {
      id: 9,
      user_id: 3,
      offer_id: 2,
      message: "I am very intrested in your position!",
      timestamp: "2021-02-18T17:12:38.223Z",
      name: "Harry n' Marv",
      title: "Grocery shopping",
    },
  ],
};

export default fixtures;
