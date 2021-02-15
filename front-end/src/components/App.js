import React, { useEffect, useRef, useState } from 'react';
import Navbar from "./navbar/Navbar";
import Map from "./Map";
import { Input } from "@material-ui/core";
import { io } from 'socket.io-client'
import Jobs from "./Jobs";
import Chat from "./Chat/Chat";
const _socket = io.connect('http://localhost:8080', { transports: ["websocket"] });

const useChatSocket = () => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(_socket);
  const socket = socketRef.current;

  const sendMessage = ({ name, message }) => {
    return socket.emit('message', { name, message });
  };

  useEffect(() => {
    socket.removeAllListeners();
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  });
  return { messages, sendMessage};
};



function App() {

  const { messages, sendMessage } = useChatSocket();

  return (
    <div className="App">
      <Navbar />
      <div className="containers">

        <div className="map-container">
          <Map />
        </div>

        <div className="jobs-container">
          <Jobs />
          <Chat messages={messages} sendMessage={sendMessage}/>
        </div>

      </div>
    </div>
  );
}

export default App;
