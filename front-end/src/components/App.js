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
  const [coord, setCoord] = useState({
    lat: 49.26800377076573,
    lng: -123.10571490809717,
  });

  const { state, setJobView, saveJob } = useAppData();

  const jobMarkers = getJobsFiltered(state, []); // replace with state for filters

  return (
    <div className="App">
      <Navbar />
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
            setCoord={setCoord}
            coord={coord}
            saveJob={saveJob}
          />
          {/* {<ChatList messages={messages} sendMessage={sendMessage} /> } */}
          <ChatNav setJobView={setJobView} />
        </div>
      </div>
    </div>
  );
}
