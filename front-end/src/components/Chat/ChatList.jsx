import ChatSearch from "./ChatSearch";
import ChatListItem from "./ChatListItem";
import Toolbar from "./Toolbar";

import "./Chat.css";

export default function ChatList({
  getConversations,
  setChat,
  setJobView,
  getUserNameFromId,
  currentUser
}) {

  // GETTING ALL CONVERSATIONS AND USERS NAMES AND PASSING TO CHATLISTITEMS
  const chatListData = getConversations();

    const chatListItems = chatListData.map((item) => <ChatListItem
        key={item.id}
        data={{id: item.id, title: item.title, message: item.message}}
        setJobView={setJobView}
        setChat={setChat}
        />
    );
  
  return (
    <div className="conversation-list">
      <h3>Messages</h3>
      <ChatSearch />
      <div className="message-list-container">{chatListItems}</div>
    </div>
  );
}
