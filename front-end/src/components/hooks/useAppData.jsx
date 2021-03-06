import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function useAppData() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [room, setRoom] = useState("");

  // SET INITIAL PROJECT STATE
  const [state, setState] = useState({
    users: {},
    jobs: {},
    categories: {},
    offers: {},
    chats: {},
    reviews: {},
    jobView: "POST",
    chatId: null,
    currentUser: null,
  });

  // GET ALL INFO REQUIRED FOR PAGE FROM DB AND ADD TO STATE
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
    // IF USER ALREADY HAS COOKIE FROM PREVIOUS LOGIN IN SET USER
    if (cookies && cookies.user) {
      setCurrentUser(+cookies.user);
    }
  }, []);

  // SETS VIEW FOR RIGHT HALF OF PAGE
  const setJobView = (jobView) =>
    setState((previous) => ({ ...previous, jobView }));

  const setProfile = (profile) => {
    setState((prev) => ({ ...prev, profile }));
  };

  // SETS PAGE VIEW AND WHICH SPECIFIC CHAT TO OPEN AND COOKIE FOR BACKEND
  const setChat = (chatId) => {
    setCookie("room", chatId, {
      path: "/",
    });
    setRoom(chatId);
    setState((prev) => ({ ...prev, chatId, jobView: "CHAT" }));
  };

  // SET COOKIE FOR CURRENT USER FOR BACKEND, RETRIEVE USER MESSAGES FROM DB AND SHOWS ALL USER JOBS PAGE
  const setCurrentUser = (currentUser) => {
    setCookie("user", currentUser, {
      path: "/",
    });
    Promise.all([axios.get(`/api/login/messages/${currentUser}`)]).then(
      (all) => {
        setState((prev) => ({
          ...prev,
          jobView: "ALL",
          userMessages: all[0].data,
          currentUser,
        }));
      }
    );
  };

  const removeCurrentUser = () => {
    setState({ ...state, currentUser: null });
    removeCookie("user");
  };

  const setMessages = (message) => {
    setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
  };

  const addMessage = (message) => {
    return axios.post("/api/messages", { message });
  };

  const getUserNameFromId = (id) => {
    const users = Object.values(state.users);
    for (const user of users) {
      if (user.id === id) {
        return user.name;
      }
    }
  };

  // LOOP THROUGH ALL MESSAGES FROM USER, CREATE OBJECT CONTAINING OFFER ID AND USERS INVOLVED IN CONVERSATION
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

  // RETURN MESSAGES FOR SPECIFIC OFFER
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

  const postJob = (job) => {
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
  };

  const changeJobStatus = (job) => {
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
  };

  const deletePost = (id) => {
    return axios.delete(`/api/jobs/${id}`).then(() => {
      const jobs = { ...state.jobs };
      delete jobs[id];
      setState((prev) => ({
        ...prev,
        jobs,
      }));
    });
  };

  const postOffer = (offer) => {
    console.log("OFFER OBJ: ", offer);
    return axios
      .post(`/api/offers/`, { offer })
      .then((res, req) => {
        const offer_id = res.data.offerId.id;
        console.log("res from post", res.data);
        console.log("res from post", res.data.offerId.id);

        const id = Object.keys(state.offers).length + 1;
        setState({
          ...state,
          offers: {
            ...state.offers,
            [id]: { ...offer, id },
          },
        });
        return offer_id;
      })
      .then((offer_id) => {
        const newMessage = {
          offer_id,
          user_id: offer.helper_id,
          message: `User has sent an offer of $${offer.price}`,
        };
        addMessage(newMessage);
      })
      .catch((err) => console.log(err));
  };

  const updateOffer = (update) => {
    changeOfferStatus(update);
    changeJobStatus(update);
  };

  const changeOfferStatus = (offer) => {
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
  };

  const postReview = (review) => {
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
  };

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
    getUserNameFromId,
    deletePost,
  };
}
