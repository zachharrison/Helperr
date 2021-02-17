import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Map from "./Map";
import ChatNav from "./Chat/ChatNav";
import { io } from "socket.io-client";
import Jobs from "./Jobs";
import Chat from "./Chat/Chat";
import fixtures from "./helpers/__mocks__/axios";
import ChatList from "./Chat/ChatList";
import useAppData from "./helpers/hooks/useAppData";
import { useCookies } from "react-cookie";
import Login from './Login/Login'
// import { Input } from "@material-ui/core";
// import fixtures from "./helpers/__mocks__/axios";
const _socket = io.connect("http://localhost:8001", {
  transports: ["websocket"],
});


// how to have the state start with the state from useAppData - can we pass this into a chat socket?
// if so how since it one is not a child of the other

import { getJobsFiltered } from "./helpers/selectors";

const _socket = io.connect("http://localhost:8001", {
  transports: ["websocket"],
});

const useChatSocket = () => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(_socket);
  const socket = socketRef.current;

  const sendMessage = ({ name, message }) => {
    return socket.emit("message", { name, message });
  };

  useEffect(() => {
    socket.removeAllListeners();
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  });
  return { messages, sendMessage };
};

export default function App() {
  const { messages, sendMessage } = useChatSocket();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  function handleCookie(id) {
    setCookie("user", id, {
      path: "/"
    })
  }

  const [coord, setCoord] = useState({
    lat: 49.26800377076573,
    lng: -123.10571490809717,
  });
  // fixtures has: users, jobs, categories, offers, messages, reviews
  // const { users, jobs, categories, offers, messages, reviews } = fixtures;
  const { state, setJobView, setMessageView, getConversations, getMessages, setChat } = useAppData();


  const jobMarkers = getJobsFiltered(state, []); // replace with state for filters

  console.log("jobsFIltered", jobMarkers);

  return (
    <div className="App">
      <Navbar handleCookie={handleCookie} removeCookie={removeCookie}/>
      <div className="containers">
        <div className="map-container">
          <Map
            state={state}
            setJobView={setJobView}
            setCoord={setCoord}
            coord={coord}
            jobMarkers={jobMarkers}
          />
        </div>

        <div className="jobs-container">
          <Jobs
            state={state}
            setJobView={setJobView}
            messages={messages}
            sendMessage={sendMessage}
            setMessageView={setMessageView}
            getConversations={getConversations}
            getMessages={getMessages}
            setChat={setChat}
            cookies={cookies}  
            setCoord={setCoord}
            coord={coord}
          />
          <ChatNav setJobView={setJobView} />
        </div>
      </div>
    </div>
  );
}
