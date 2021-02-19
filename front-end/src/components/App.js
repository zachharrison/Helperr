import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Map from "./Map";
import ChatNav from "./Chat/ChatNav";
import { io } from "socket.io-client";
import Jobs from "./Jobs";
import useAppData from "./hooks/useAppData";
import { getJobsFiltered } from "./helpers/selectors";
const _socket = io.connect("http://localhost:8001", {
  transports: ["websocket"],
});

// how to have the state start with the state from useAppData - can we pass this into a chat socket?
// if so how since it one is not a child of the other

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
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [coord, setCoord] = useState({
    lat: 49.26800377076573,
    lng: -123.10571490809717,
  });

  const {
    state,
    setJobView,
    setMessageView,
    getConversations,
    getMessages,
    setChat,
    setCurrentUser,
    removeCurrentUser,
    cookies,
    setMessages,
    postJob,
  } = useAppData();

  const jobsFiltered = getJobsFiltered(state, categoryFilter);

  return (
    <div className="App">
      <Navbar
        setCurrentUser={setCurrentUser}
        removeCurrentUser={removeCurrentUser}
      />
      <div className="containers">
        <div className="map-container">
          <Map
            state={state}
            setJobView={setJobView}
            setCoord={setCoord}
            coord={coord}
            jobMarkers={jobsFiltered}
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
            setCoord={setCoord}
            coord={coord}
            jobsFiltered={jobsFiltered}
            setCategoryFilter={setCategoryFilter}
            cookies={cookies}
            setCurrentUser={setCurrentUser}
            removeCurrentUser={removeCurrentUser}
            setMessages={setMessages}
            postJob={postJob}
          />
          <ChatNav setJobView={setJobView} />
        </div>
      </div>
    </div>
  );
}
