import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Map from "./Map";
import ChatNav from "./Chat/ChatNav";
import { io } from "socket.io-client";
import Jobs from "./Jobs";
import useAppData from "./hooks/useAppData";
import { getJobsFiltered } from "./helpers/selectors";
import JobToggle from "./JobToggle/JobToggle";

export default function App() {
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [coord, setCoord] = useState({
    lat: 49.26800377076573,
    lng: -123.10571490809717,
  });

  const {
    state,
    setState,
    setJobView,
    jobView,
    setMessageView,
    getConversations,
    getMessages,
    setChat,
    setCurrentUser,
    removeCurrentUser,
    cookies,
    setMessages,
    postJob,
    postOffer,
    addMessage,
    room,
    setRoom,
  } = useAppData();

  const [socket, setSocket] = useState("");

  const initiateSocket = (room) => {
    const socket = io("http://localhost:8001", { transports: ["websocket"] });
    setSocket(socket);
    // console.log(`Connecting socket...`);
    if (socket && room) socket.emit("join", room);
    socket.on("chat", (msg) => {
      // console.log('A chat repsonse', msg);
      // cb(null, msg);
      // console.log('THIS IS A STATE TEST ', state)

      const newMessage = {
        offer_id: state.chatId,
        user_id: msg.user_id,
        message: msg.message,
      };
      setState((prev) => ({
        ...prev,
        userMessages: [...prev.userMessages, newMessage],
      }));
      // getConversations();
      // addMessage({msg})
      // addMessage({
      //   offer_id: room,
      //   user_id: msg.user_id,
      //   message: msg.message,
      // });
      console.log(msg);
      // setState here becoz msg contains new message
      // debugger
      // setState(prev => ({...prev, userMessages: [...prev.userMessages, {...msg, room} ]}))
      // setState(prev => ({...prev, userMessages: [...prev.userMessages, msg]}))
    });
  };
  const disconnectSocket = () => {
    // console.log('Disconnecting socket...', !!socket);
    if (socket) socket.disconnect();
    setSocket(null);
  };
  // const joinChat = (cb) => {
  //   // console.log("socket in joinchat", socket)
  //   if (!socket) {
  //     console.log("joinchat has no socket");
  //     return true;
  //   }
  //   socket.on("chat", (msg) => {
  //     // console.log('Websocket event received!');
  //     return cb(null, msg);
  //   });
  // };
  const sendMessage = (message) => {
    console.log("SENT");
    // addMessage(message)
    // addMessage({
    //   offer_id: room,
    //   user_id: user_id,
    //   message: message,
    // });
  };

  // const [room, setRoom] = useState('');
  const [message, setMessage] = useState("");
  const [currentChat, setCurrentChat] = useState([]);
  useEffect(() => {
    if (state.chatId) initiateSocket(room);
    // console.log(socket)
    // // socket.on('chat', msg => {
    // //   console.log('TESTING RESPONSE FROM USE EFFECT', msg);
    // // });
    // joinChat((err, data) => {
    //   if(err) console.log("error:", err);
    //   setChat(oldChats =>[data, ...oldChats])
    // });
    return () => {
      disconnectSocket();
    };
  }, [room]);

  const jobsFiltered = getJobsFiltered(state, categoryFilter);

  return (
    <div className="App">
      <Navbar
        setCurrentUser={setCurrentUser}
        removeCurrentUser={removeCurrentUser}
      />
      <div className="page-containers">
        <div className="map-container">
          <Map
            state={state}
            setJobView={setJobView}
            jobView={jobView}
            setCoord={setCoord}
            coord={coord}
            jobMarkers={jobsFiltered}
          />
        </div>

        <div className="right-container">
          <div>
            <JobToggle state={state} setJobView={setJobView} />
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
              jobsFiltered={jobsFiltered}
              setCategoryFilter={setCategoryFilter}
              cookies={cookies}
              setCurrentUser={setCurrentUser}
              removeCurrentUser={removeCurrentUser}
              setMessages={setMessages}
              postJob={postJob}
              postOffer={postOffer}
              addMessage={addMessage}
            />
          </div>
          <div className="chat-container">
            <ChatNav setJobView={setJobView} />
          </div>
        </div>
      </div>
    </div>
  );
}

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
