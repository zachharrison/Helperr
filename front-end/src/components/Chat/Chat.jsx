import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Toolbar from '../Chat/Toolbar'
import "./Chat.css";
// import { io } from "socket.io-client";
import fixtures from '../helpers/__mocks__/axios'

const Chat = ({ messages, sendMessage, getMessages, state }) => {
  const [messageState, setMessageState] = useState({ message: "", name: "" });

  const onTextChange = (e) => {
    setMessageState({ ...messageState, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = messageState;
    sendMessage({ name, message });
    setMessageState({ message: "", name });
  };

  const messageList = getMessages(state.chatId)
  const messageListDisplay = messageList.map((message, index) => {
    const currentAuthor = "Natasha"
    return (
      <div className="chat">
        <div className={[`${message.name === currentAuthor ? 'mine' : 'yours'}`, 'messages'].join(' ')} key={index}>
            <div className="message last">
              { message.message }
            </div>
        </div>
      </div>
    )
  })

    return (
      <div className="message-list scrollable content">
        <Toolbar
          title="Conversation Title"
        />
        <form onSubmit={onMessageSubmit}>
          <div>
            <TextField
              name="message"
              onChange={(e) => onTextChange(e)}
              value={messageState.message}
              id="outlined-multiline-static"
              variant="outlined"
              label="Message"
            />
          </div>
          <button>Send Message</button>
        </form>
        <div className="chat-body">
          {messageListDisplay}
        </div>
    </div>
    );
}

export default Chat;