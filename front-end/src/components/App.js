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
// import { Input } from "@material-ui/core";

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

// set state for lat/long here, pass it down to places
// places calls this instead of panTo
// then down to map, which takes in lat/long,
// trigger change useState to update map by running panTo in map w/ these new coords
// w/ the lil array box at the bottom

export default function App() {
  const { messages, sendMessage } = useChatSocket();
  const [coord, setCoord] = useState({
    lat: 49.26800377076573,
    lng: -123.10571490809717,
  });

  const panTo1 = function (lat, lng) {
    setCoord({ lat, lng });
  };

  // fixtures has: users, jobs, categories, offers, messages, reviews
  // const { users, jobs, categories, offers, messages, reviews } = fixtures;
  const { state, setJobView, setPostCode } = useAppData();

  return (
    <div className="App">
      <Navbar />
      <div className="containers">
        <div className="map-container">
          <Map
            state={state}
            setPostCode={setPostCode}
            setJobView={setJobView}
            panTo1={panTo1}
            setCoord={setCoord}
            coord={coord}
          />
        </div>

        <div className="jobs-container">
          <Jobs
            state={state}
            setJobView={setJobView}
            messages={messages}
            sendMessage={sendMessage}
            panTo1={panTo1}
            setCoord={setCoord}
            coord={coord}
          />
          {/* {<ChatList messages={messages} sendMessage={sendMessage} /> } */}
          <ChatNav setJobView={setJobView} />
        </div>
      </div>
    </div>
  );
}
