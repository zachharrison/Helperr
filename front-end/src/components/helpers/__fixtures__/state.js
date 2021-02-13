export default {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2],
      interviewers: [1, 2],
      spots: 2
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [3, 4],
      interviewers: [1, 2],
      spots: 2
    }
  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": { id: 2, time: "1pm", interview: null },
    "3": { id: 3, time: "12pm", interview: null },
    "4": { id: 4, time: "1pm", interview: null }
  },
  users: {
    "1": {
      id: 1,
      name: "BobTheBuilder",
      avatar: "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    }
  }
};
