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
      per_hr: "FALSE",
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
      per_hr: "TRUE",
      start_time: "2021-02-27 12:00:00",
      end_time: "NULL",
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
      per_hr: "TRUE",
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
      userId: 1,
      messages: [
      {
        id: 1,
        name: "Natasha",
        userId: 1,
        message: "Yo"
      },
      {
        id: 2,
        name: 'Zach',
        userId: 2,
        message: "Morning!"
      },
      {
        id: 3,
        name: "Natasha",
        userId: 1,
        message: "What's up dude?"
      }
    ],
      
    },
     {
      id: 2,
      userId: 1,
      messages: [
      {
        id: 1,
        name: "John",
        userId: 3,
        message: "This chat is so cool bruh!"
      },
      {
        id: 2,
        name: "Natasha",
        userId: 1,
        message: "I know right!"
      },
      {
        id: 3,
        name: "John",
        userId: 3,
        message: "Best chat application ever made!!"
      }
    ],
      
    },
   {
      id: 3,
      userId: 2,
      messages: [
      {
        id: 1,
        name: 'Zach',
        userId: 2,
        message: "Message 3 hey there!"
      },
      {
        id: 2,
        name: 'Jeff',
        userId: 4,
        message: "Morning!"
      },
      {
        id: 1,
        name: 'Zach',
        userId: 2,
        message: "What's up dude?"
      }
    ],
      
    },
    {
      id: 4,
      userId: 2,
      messages: [
      {
        id: 1,
        name: 'Zach',
        userId: 2,
        message: "Whaaaaaaadddddduuuup???"
      },
      {
        id: 2,
        name: 'Sam',
        userId: 3,
        message: "Just kickin it wbu?!?!"
      },
      {
        id: 3,
        name: 'Zach',
        userId: 2,
        message: "∫®ø˚∂ß¬©˙∂˚ø©u"
      }
    ],
      
    },
    {
      id: 5,
      userId: 1,
      messages: [
      {
        id: 1,
        name: "Jessie",
        userId: 5,
        message: "Can you help me fix my car?"
      },
      {
        id: 2,
        name: "Natasha",
        userId: 1,
        message: "Sure what seems to be the issue??"
      },
      {
        id: 3,
        name: "Jessie",
        userId: 5,
        message: "It makes this afhaghghgh sound when I start it"
      }
    ],
      
    }
  ]
};

export default fixtures;
