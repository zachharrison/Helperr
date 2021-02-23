import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function useAppData() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [room, setRoom] = useState("");
  // const [messageState, setMessageState] = useState({ room: cookies.room, user: cookies.user});
  const [state, setState] = useState({
    users: {},
    jobs: {},
    categories: {},
    offers: {},
    chats: {},
    reviews: {},
    jobView: "ALL",
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
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        jobView: "ALL",
        users: all[0].data,
        jobs: all[1].data,
        categories: all[2].data,
        offers: all[3].data,
        reviews: all[4].data,
      }));
    });
    if (cookies && cookies.user) {
      setCurrentUser(+cookies.user);
    }
  }, []);

  const setJobView = (jobView) =>
    setState((previous) => ({ ...previous, jobView }));

  const setProfile = (profile) => {
    setState((prev) => ({ ...prev, profile }));
  };

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
    return axios.post("/api/messages", { message });
  };

  const getConversations = () => {
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

  function postOffer(offer) {
    return axios.post(`/api/offers/`, { offer }).then(() => {
      const id = Object.keys(state.offers).length + 1;
      setState({
        ...state,
        offers: {
          ...state.offers,
          [id]: { ...offer, id },
        },
      });
    });
  }

  function updateOffer(update) {
    changeOfferStatus(update);
    changeJobStatus(update);
  }

  function changeOfferStatus(offer) {
    return axios.post(`/api/offers/${offer.offer_id}`, { offer }).then(() => {
      setState((prevState) => ({
        ...prevState,
        offers: {
          ...prevState.offers,
          [offer.offer_id]: {
            ...prevState.offers[offer.offer_id],
            status: offer.offer_status,
          },
        },
      }));
    });
  }
  function changeJobStatus(job) {
    return axios.post(`/api/jobs/${job.job_id}`, { job }).then(() => {
      setState((prevState) => ({
        ...prevState,
        jobs: {
          ...prevState.jobs,
          [job.job_id]: {
            ...prevState.jobs[job.job_id],
            status: job.job_status,
            helper_id: job.helper_id,
          },
        },
      }));
    });
  }

  function postReview(review) {
    console.log("REVIEW POSTED", review);
    changeJobStatus(review);
    changeOfferStatus(review);
    return axios.post(`/api/reviews/`, { review }).then(() => {
      const id = Object.keys(state.reviews).length + 1;
      setState((prevState) => ({
        ...prevState,
        reviews: {
          ...prevState.reviews,
          [id]: { ...review, id },
        },
      }));
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
    postOffer,
    postReview,
    updateOffer,
    addMessage,
    setProfile,
  };
}
