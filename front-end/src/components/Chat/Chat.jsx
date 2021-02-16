import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Toolbar from '../Chat/Toolbar'
import "./Chat.css";
// import { io } from "socket.io-client";
import fixtures from '../helpers/__mocks__/axios'

const Chat = ({ messages, sendMessage }) => {
  const {chats} = fixtures
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

  // const myTestMessage = "What's up dude?";
  // const myTestMessage2 = "Oh you know just trying to figure out these damn web sockets";
  // const yourTestMessage = 'Not too much wbu?';

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

  // (
  //   <div className="chat">
  //     <div className="mine messages">
  //         <div className="message last">
  //           { myTestMessage }
  //         </div>
  //     </div>
  //     <div className="yours messages">
  //         <div className="message last">
  //           { yourTestMessage }
  //         </div>
  //     </div>
  //     <div className="mine messages">
  //         <div className="message last">
  //           { myTestMessage2 }
  //         </div>
  //     </div>
  //   </div>
  // )
    
      return chats.map((chat, index) => {
        console.log(chat)
      const currentAuthor = "Natasha"
      // let isMine = current.author === MY_USER_ID;
      return (
        <div className="chat" key={chat.id}>
          <div className={[
                'message',
                `${chat.name === currentAuthor ? 'mine' : 'yours'}`,
                // `${startsSequence ? 'start' : ''}`,
                // `${endsSequence ? 'end' : ''}`
              ].join(' ')}>
            <div className="message last">
              { chat.messages.message }
            </div>
          </div>
        </div>
      )
    })
      
    // <div className={[
    //   'message',
    //   `${isMine ? 'mine' : 'yours'}`,
    //   `${startsSequence ? 'start' : ''}`,
    //   `${endsSequence ? 'end' : ''}`
    // ].join(' ')}>

    
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


// import React, {useEffect, useState} from 'react';
// import Compose from '../Compose';
// import Toolbar from '../Toolbar';
// import ToolbarButton from '../ToolbarButton';
// import Message from '../Message';
// import moment from 'moment';

// import './MessageList.css';

// const MY_USER_ID = 'apple';

// export default function MessageList(props) {
//   const [messages, setMessages] = useState([])

//   useEffect(() => {
//     getMessages();
//   },[])

  
//   const getMessages = () => {
//      var tempMessages = [
//         {
//           id: 1,
//           author: 'apple',
//           message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
//           timestamp: new Date().getTime()
//         },
//         {
//           id: 2,
//           author: 'orange',
//           message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
//           timestamp: new Date().getTime()
//         },
//         {
//           id: 3,
//           author: 'orange',
//           message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
//           timestamp: new Date().getTime()
//         },
//         {
//           id: 4,
//           author: 'apple',
//           message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
//           timestamp: new Date().getTime()
//         },
//         {
//           id: 5,
//           author: 'apple',
//           message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
//           timestamp: new Date().getTime()
//         },
//         {
//           id: 6,
//           author: 'apple',
//           message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
//           timestamp: new Date().getTime()
//         },
//         {
//           id: 7,
//           author: 'orange',
//           message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
//           timestamp: new Date().getTime()
//         },
//         {
//           id: 8,
//           author: 'orange',
//           message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
//           timestamp: new Date().getTime()
//         },
//         {
//           id: 9,
//           author: 'apple',
//           message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
//           timestamp: new Date().getTime()
//         },
//         {
//           id: 10,
//           author: 'orange',
//           message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
//           timestamp: new Date().getTime()
//         },
//       ]
//       setMessages([...messages, ...tempMessages])
//   }

//   const renderMessages = () => {
//     let i = 0;
//     let messageCount = messages.length;
//     let tempMessages = [];

//     while (i < messageCount) {
//       let previous = messages[i - 1];
//       let current = messages[i];
//       let next = messages[i + 1];
//       let isMine = current.author === MY_USER_ID;
//       // let currentMoment = moment(current.timestamp);
//       let prevBySameAuthor = false;
//       let nextBySameAuthor = false;
//       let startsSequence = true;
//       let endsSequence = true;
//       // let showTimestamp = true;

//       // if (previous) {
//       //   let previousMoment = moment(previous.timestamp);
//       //   let previousDuration = moment.duration(currentMoment.diff(previousMoment));
//       //   prevBySameAuthor = previous.author === current.author;
        
//       //   if (prevBySameAuthor && previousDuration.as('hours') < 1) {
//       //     startsSequence = false;
//       //   }

//       //   if (previousDuration.as('hours') < 1) {
//       //     showTimestamp = false;
//       //   }
//       // }

//       // if (next) {
//       //   let nextMoment = moment(next.timestamp);
//       //   let nextDuration = moment.duration(nextMoment.diff(currentMoment));
//       //   nextBySameAuthor = next.author === current.author;

//       //   if (nextBySameAuthor && nextDuration.as('hours') < 1) {
//       //     endsSequence = false;
//       //   }
//       // }

//       tempMessages.push(
//         <Message
//           key={i}
//           isMine={isMine}
//           startsSequence={startsSequence}
//           endsSequence={endsSequence}
//           showTimestamp={showTimestamp}
//           data={current}
//         />
//       );

//       // Proceed to the next message.
//       i += 1;
//     }

//     return tempMessages;
//   }

//     return(
//       <div className="message-list">
//         <Toolbar
//           title="Conversation Title"
//           rightItems={[
//             <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
//             <ToolbarButton key="video" icon="ion-ios-videocam" />,
//             <ToolbarButton key="phone" icon="ion-ios-call" />
//           ]}
//         />

//         <div className="message-list-container">{renderMessages()}</div>

//         <Compose rightItems={[
//           <ToolbarButton key="photo" icon="ion-ios-camera" />,
//           <ToolbarButton key="image" icon="ion-ios-image" />,
//           <ToolbarButton key="audio" icon="ion-ios-mic" />,
//           <ToolbarButton key="money" icon="ion-ios-card" />,
//           <ToolbarButton key="games" icon="ion-logo-game-controller-b" />,
//           <ToolbarButton key="emoji" icon="ion-ios-happy" />
//         ]}/>
//       </div>
//     );
// }

// export default function Message(props) {
//   const {
//     data,
//     isMine,
//     startsSequence,
//     endsSequence,
//     showTimestamp
//   } = props;

//   const friendlyTimestamp = moment(data.timestamp).format('LLLL');
//   return (
//     <div className={[
//       'message',
//       `${isMine ? 'mine' : 'yours'}`,
//       `${startsSequence ? 'start' : ''}`,
//       `${endsSequence ? 'end' : ''}`
//     ].join(' ')}>
//       {
//         showTimestamp &&
//           <div className="timestamp">
//             { friendlyTimestamp }
//           </div>
//       }

//       <div className="bubble-container">
//         <div className="bubble" title={friendlyTimestamp}>
//           { data.message }
//         </div>
//       </div>
//     </div>
//   );
// }
