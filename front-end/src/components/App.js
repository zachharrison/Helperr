import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Map from "./Map";
import ChatNav from "./Chat/ChatNav";
import { io } from "socket.io-client";
import Jobs from "./Jobs";
import useAppData from "./helpers/hooks/useAppData";
import { getJobsFiltered } from "./helpers/selectors";

// const _socket = io.connect("http://localhost:8001", {
//   transports: ["websocket"],
// });
// const socketRef = useRef(_socket);
// const socket = socketRef.current;

// how to have the state start with the state from useAppData - can we pass this into a chat socket?
// if so how since it one is not a child of the other

// const useChatSocket = () => {
//   const [messages, setMessages] = useState([]);
//   const socketRef = useRef(_socket);
//   const socket = socketRef.current;

//   const sendMessage = ({ userId, message }) => {
//     return socket.emit("message", { userId, message });
//   };

//   useEffect(() => {room
//     socket.removeAllListeners();
//     socket.on("message", (message) => {
//       setMessages([...messages, message]);
//     });
//     socket.on('connectToRoom', (room) => {
//       console.log(room)
//     })
  
//   });
//   return { messages, sendMessage };
// };





export default function App() {
  // const { messages, sendMessage } = useChatSocket();
  /* saveJob={saveJob} */

  // const {
  //   state,
  //   setJobView,
  //   setMessageView,
  //   getConversations,
  //   getMessages,
  //   setChat,
  //   setCurrentUser,
  //   removeCurrentUser,
  //   cookies,
  //   setMessages,
  //   postJob,
  // } = useAppData();

  let socket;
  const initiateSocket = (room) => {
    socket = io("http://localhost:8001");
    console.log(`Connecting socket...`);
    if (socket && room) socket.emit('join', room);
  }
  const disconnectSocket = () => {
    console.log('Disconnecting socket...');
    if(socket) socket.disconnect();
  }
  const joinChat = (cb) => {
    if (!socket) return(true);
    socket.on('chat', msg => {
      console.log('Websocket event received!');
      return cb(null, msg);
    });
  }
  const sendMessage = (message, room, user ) => {
    if (socket) socket.emit('chat', { message, room, user });
  }


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
    addMessage
  } = useAppData();


  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [currentChat, setCurrentChat] = useState([]);
  useEffect(() => {
    if (state.chatId) initiateSocket(room);
    joinChat((err, data) => {
      if(err) return;
      setChat(oldChats =>[data, ...oldChats])
    });
    return () => {
      disconnectSocket();
    }
  }, [room]);

  const [coord, setCoord] = useState({
    lat: 49.26800377076573,
    lng: -123.10571490809717,
  });

  const jobMarkers = getJobsFiltered(state, []); // replace with state for filters

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
            jobMarkers={jobMarkers}
          />
        </div>

        <div className="jobs-container">
          <Jobs
            state={state}
            setJobView={setJobView}
            // {messages={messages}}
            message={message}
            sendMessage={sendMessage}
            room={room}
            setRoom={setRoom}
            setMessage={setMessage}
            currentChat={currentChat}
            setCurrentChat={setCurrentChat}
            setMessageView={setMessageView}
            getConversations={getConversations}
            getMessages={getMessages}
            setChat={setChat}
            setCoord={setCoord}
            coord={coord}
            cookies={cookies}
            setCurrentUser={setCurrentUser}
            removeCurrentUser={removeCurrentUser}
            setMessages={setMessages}
            postJob={postJob}
            addMessage={addMessage}
          />
          <ChatNav setJobView={setJobView} />
        </div>
      </div>
    </div>
  );
}
