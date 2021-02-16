import { useState, useEffect } from "react";
import fixtures from "../__mocks__/axios";
import axios from "axios";

export default function useAppData() {
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
  });
  
  // useEffect(() => {
  //   getConversations()
  // },[])

  useEffect(() => {
    Promise.all([
      axios.get("/api/users"),
      axios.get("/api/jobs"),
      axios.get("/api/categories"),
      axios.get("/api/offers"),
      axios.get("/api/messages"),
      axios.get("/api/reviews"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        users: all[0].data,
        jobs: all[1].data,
        categories: all[2].data,
        offers: all[3].data,
        messages: all[4].data,
        reviews: all[5].data,
      }));
    });
  }, []);

  const setJobView = (jobView) => setState({ ...state, jobView });
  const setPostCode = (postCode) => setState({ ...state, postCode });
  const setChatView = (chatView) => setState({ ...state, chatView });



  const getConversations = () => {
    const currentUser = "Natasha"
    const usersConversations = chats.filter(chat => chat.userName === currentUser)
    
    const chatData = usersConversations.map(chat => {
      const otherUser = chat.messages.find(message => message.name !== currentUser);
      const name = otherUser.name;
      const message = chat.messages[chat.messages.length - 1].message;
      const chatObj = { name, message };

      return chatObj

    })

    return chatData;

  }
  return { state, setJobView, setPostCode, setChatView, getConversations };
}
