import ChatSearch from "./ChatSearch";
import ChatListItem from "./ChatListItem";
import Toolbar from "./Toolbar";

import "./Chat.css";

export default function ChatList(props) {
  const {
    getConversations,
    setChat,
    setJobView,
    getUserNameFromId,
    currentUser,
  } = props;

  // GETTING ALL CONVERSATIONS AND USERS NAMES AND PASSING TO CHATLISTITEMS
  const chatListData = getConversations();
  const currentUserName = getUserNameFromId(currentUser);
  const chatUsers = chatListData[0].users;
  const otherUser = chatUsers.find((data) => data !== currentUserName);
  chatListData[0].otherUser = otherUser;

  console.log(chatListData);

  const chatListItems = chatListData.map((item) => (
    <ChatListItem
      key={item.id}
      data={{
        id: item.id,
        title: item.title,
        message: item.message,
        otherUser: item.otherUser,
      }}
      setJobView={setJobView}
      setChat={setChat}
    />
  ));

  return (
    <div className="conversation-list">
      <h3>Messages</h3>
      <ChatSearch />

      <div className="message-list-container">{chatListItems}</div>
    </div>
  );
}
