import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "./Chat.css";
// import { io } from "socket.io-client";

const Chat = ({ messages, sendMessage }) => {
  const [state, setState] = useState({ message: "", name: "" });

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = state;
    sendMessage({ name, message });
    setState({ message: "", name });
  };

  const renderChat = () => {
    return messages.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ));
  };
 

    return (
      <div className="App">
      </div>
    );
}
 


export default Chat;
