import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Toolbar from '../Chat/Toolbar'
import "./Chat.css";
// import { io } from "socket.io-client";
import fixtures from '../helpers/__mocks__/axios'

const Chat = ({ messages, sendMessage, getMessages, state, cookies }) => {
  // SAVING MESSAGE IN STATE {message: 'Hello world', name: "2"}
  // cookie is a string and ID from DB is a number
  const [messageState, setMessageState] = useState({ message: "", name: ""});


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
    const currentAuthor = 'Natasha'
    return (
      <div className="chat">
        <div className={[`${message.name == currentAuthor ? 'mine' : 'yours'}`, 'messages'].join(' ')} key={index}>
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

/* 
  - Sockets are currently in an array. How could we change this?
  - Sockets will need to be in pairs of two, how will we identify each socket?
  - When a socket connects we will need to identify a socket by a name or some type of id such as a cookie.
  - How do we send messages to the person who posted the job?
    a) Send messages to a chat room where everyone sees
    b) The job poster will have some sort of view where they can view all inqueries for job which will essentially be chat threads. Each inquery will have a job id and a user id (enquiryId)
  - If there is an existing enquiry we will place that message to the existing mail box or create a new one if it is the first message.
  - Need ui for job seekers and and job creaters to look at all message threads
  - Maybe we should have a seperate database table for inqueries
  - Instead of pushing a socket connection by itself we will need to push a socket connection along with some data about the socket. Example (this socket will belong to user 8 which is inquiring about job 4) 
  
  */
