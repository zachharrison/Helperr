import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Toolbar from '../Chat/Toolbar'
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

  const myTestMessage = "What's up dude?";
  const myTestMessage2 = "Oh you know just trying to figure out these damn web sockets";
  const yourTestMessage = 'Not too much wbu?';

  const renderChat = () => {
    // return messages.map(({ name, message }, index) => (
    //   <div className="chat">
    //     <div className="mine messages" key={index}>
    //         <div className="message last">
    //           { message }
    //         </div>
    //     </div>
    //   </div>
    // ));

    
      return (
        <div className="chat">
          <div className="mine messages">
              <div className="message last">
                { myTestMessage }
              </div>
          </div>
          <div className="yours messages">
              <div className="message last">
                { yourTestMessage }
              </div>
          </div>
          <div className="mine messages">
              <div className="message last">
                { myTestMessage2 }
              </div>
          </div>
        </div>
      )
    
  };
 

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
              value={state.message}
              id="outlined-multiline-static"
              variant="outlined"
              label="Message"
            />
          </div>
          <button>Send Message</button>
        </form>
        <div className="chat-body">
          {renderChat()}
        </div>
    </div>
    );
}
 


export default Chat;
