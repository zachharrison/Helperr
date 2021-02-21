import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { add } from "date-fns";
// import fixtures from "../helpers/__mocks__/axios";

export default function useAppData() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  // const { users, jobs, categories, offers, reviews, chats } = fixtures;
  const [room, setRoom] = useState("");
  // const [messageState, setMessageState] = useState({ room: cookies.room, user: cookies.user});
  const [state, setState] = useState({
    users: {},
    jobs: {},
    categories: {},
    offers: {},
    chats: {},
    reviews: {},
    jobView: "REVIEWS",
    chatId: null,
    currentUser: null,
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/users"),
      axios.get("/api/jobs"),
      axios.get("/api/categories"),
      axios.get("/api/offers"),
      axios.get("/api/reviews"),
      // axios.get("/api/login/1"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        jobView: "FIND",
        users: all[0].data,
        jobs: all[1].data,
        categories: all[2].data,
        offers: all[3].data,
        reviews: all[4].data,
        // login: all[5].data,
      }));
    });
    if (cookies && cookies.user) {
      setCurrentUser(+cookies.user);
    }
  }, []);

  const setJobView = (jobView) =>
    setState((previous) => ({ ...previous, jobView })); // swap to ...previous, like this, if there is a state bug****

  const setProfile = (profile) => {
    setState((prev) => ({...prev, profile}))
    // .then(console.log(profile))
  }

  const setChat = (chatId) => {
    setRoom(chatId);
    setState({ ...state, chatId, jobView: "CHAT" });
    setCookie("room", chatId, {
      path: "/",
    });
  };

  const setCurrentUser = (currentUser) => {
    setCookie("user", currentUser, {
      path: "/",
    });
    Promise.all([
      axios.get(`/api/login/messages/${currentUser}`),
      axios.get(`/api/login/jobs/${currentUser}`),
      axios.get(`/api/login/offers/${currentUser}`),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        jobView: "ALL",
        userMessages: all[0].data,
        userJobs: all[1].data,
        userOffers: all[2].data,
        currentUser,
      }));
    });
  };

  const removeCurrentUser = () => {
    setState({ ...state, currentUser: null });
    removeCookie("user");
  };

  const setMessages = (message) =>
    setState({ ...state, messages: [...state.messages, message] });

  const addMessage = (message) => {
    return axios
    .post("/api/messages", {message})
  }

  const getConversations = () => {
    const currentUser = +cookies.user;
    const usersMessages = state.userMessages;
    const result = {};

    for (const offer of usersMessages) {
      if (!result.hasOwnProperty(offer.offer_id)) {
        result[offer.offer_id] = {
          offerId: offer.offer_id,
          title: offer.title,
          messages: [offer.message],
        };
      } else {
        result[offer.offer_id].messages.push(offer.message);
      }
    }

    const conversations = Object.keys(result).map((key) => result[key]);

    return conversations.map((conversation) => {
      const id = conversation.offerId;
      const title = conversation.title;
      const lastMessage =
        conversation.messages[conversation.messages.length - 1];

      return { id, title, message: lastMessage };
    });
  };

  const getMessages = (id) => {
    const offerMessages = [];
    const userMessages = state.userMessages;
    for (const message of userMessages) {
      if (message.offer_id === id) {
        offerMessages.push(message);
      }
    }
    // console.log(offerMessages)
    return offerMessages;
  };


  function postJob(job) {
    return axios.post(`/api/jobs/`, { job }).then(() => {
      const id = Object.keys(state.jobs).length + 1;
      setState({
        ...state,
        jobs: {
          ...state.jobs,
          [id]: { ...job, id },
        },
      });
    });
  }

  return {
    state,
    setState,
    setJobView,
    getConversations,
    getMessages,
    setChat,
    setCurrentUser,
    removeCurrentUser,
    cookies,
    setCookie,
    removeCookie,
    room,
    setRoom,
    setMessages,
    postJob,
    addMessage,
    setProfile
  };
}
