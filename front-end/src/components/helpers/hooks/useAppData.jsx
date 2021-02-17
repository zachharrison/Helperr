import { useState, useEffect } from "react";
import fixtures from "../__mocks__/axios";
import axios from "axios";
import { useCookies } from 'react-cookie';

export default function useAppData() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const { users, jobs, categories, offers, reviews, chats } = fixtures;
  const [state, setState] = useState({
    users,
    jobs,
    categories,
    offers,
    chats,
    reviews,
    jobView: "FIND",
    postcode: "",
    chatId: null,
    currentUser: null
  });


  // useEffect(() => {
  //   getConversations()
  // },[])
    // lat: 49.26800377076573,
    // lng: -123.10571490809717,
  //);

  useEffect(() => {
    Promise.all([
      axios.get("/api/users"),
      axios.get("/api/jobs"),
      axios.get("/api/categories"),
      axios.get("/api/offers"),
      axios.get("/api/reviews"),
      axios.get("/api/messages"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        users: all[0].data,
        jobs: all[1].data,
        categories: all[2].data,
        offers: all[3].data,
        reviews: all[4].data,
        messages: all[4].data,
      }));
    });
  }, []);
  const setJobView = (jobView) => setState({ ...state, jobView });
  const setPostCode = (postCode) => setState({ ...state, postCode });
  const setChat = (chatId) => setState({ ...state, chatId, jobView: "CHAT" })
  
  const setCurrentUser = (currentUser) => {
    setState({...state, currentUser})
    setCookie("user", currentUser, {
      path: "/"
    })
  }

  const removeCurrentUser = () => {
    setState({...state, currentUser: null})
    removeCookie("user")
  }

  // function handleCookie(id) {
  //   setCookie("user", id, {
  //     path: "/"
  //   })
  // }
  const setMessages = (message) => setState({...state, messages: [...state.messages, message]})

  // setCurrentUser(2)

  const getConversations = () => {
    // THIS CURRENT IS HARDCODED FOR NOW HOW CAN WE GET THE COOKIE FROM HERE????
    const currentUser = +cookies.user
    const usersConversations = chats.filter(chat => chat.userName === currentUser)
    
    const chatData = usersConversations.map(chat => {
      const otherUser = chat.messages.find(message => message.name !== currentUser);
      const id = chat.id;
      const name = otherUser.name;
      const message = chat.messages[chat.messages.length - 1].message;
      const chatObj = { id, name, message };

      return chatObj

    })

    return chatData;

  }

  const getMessages = (id) => {
    for (const chat of chats) {
      if (chat.id === id) {
        return chat.messages;
      }
    }
  }


  return { state, setJobView, setPostCode, getConversations, getMessages, setChat, setCurrentUser, removeCurrentUser, cookies, setMessages };
  /*   function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const days = displaySpots(state.days, appointments);

    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then(setState({ ...state, days, appointments }));
  } */

  return { state, setJobView };
}
