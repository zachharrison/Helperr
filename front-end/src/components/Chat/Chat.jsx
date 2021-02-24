import Toolbar from "../Chat/Toolbar";
import "./Chat.css";

export default function Chat(props) {
  const {
    getMessages,
    state,
    cookies,
    message,
    sendMessage,
    setMessage,
    setCurrentChat,
    addMessage,
  } = props;

  // LOOP THROUGH USER MESSAGES AND RETURN TITLE IF CHATID IN STATE IS EQUAL TO THE OFFERID FROM THE USER MESSAGE OBJECT
  let jobTitle;
  for (const message of state.userMessages) {
    if (state.chatId === message.offer_id) {
      jobTitle = message.title;
    }
  }

  const onMessageSubmit = () => {
    const user_id = cookies.user;
    const room = state.chatId;
    addMessage({ offer_id: room, user_id, message });
    sendMessage({ message, room, user_id });
    setCurrentChat((oldChats) => [message, ...oldChats]);
    setMessage("");
  };

  const messageList = getMessages(state.chatId);
  const messageListDisplay = messageList.map((message, index) => {
    const currentAuthor = +cookies.user;
    return (
      <div className="chat">
        <div
          className={[
            `${message.user_id == currentAuthor ? "mine" : "yours"}`,
            "messages",
          ].join(" ")}
          key={index}
        >
          <div className="message last">{message.message}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="message-list scrollable content">
      <h3>{jobTitle}</h3>
      <div className="chat-body">{messageListDisplay}</div>
      <div className="message-container">
        <input
          autoComplete="off"
          className="message-input"
          type="text"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Message"
        />

        <button className="message-btn" onClick={() => onMessageSubmit()}>
          Send
        </button>
      </div>
    </div>
  );
}
