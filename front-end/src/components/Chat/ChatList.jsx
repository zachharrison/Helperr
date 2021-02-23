import React from "react";
import ChatSearch from "./ChatSearch";
import ChatListItem from "./ChatListItem";
import Toolbar from "./Toolbar";

import "./ChatList.css";

export default function ChatList({ getConversations, setChat, setJobView }) {
  const chatListData = getConversations();

  const chatListItems = chatListData.map((item) => (
    <ChatListItem
      key={item.id}
      data={{ id: item.id, title: item.title, message: item.message }}
      setJobView={setJobView}
      setChat={setChat}
    />
  ));

  return (
    <div className="conversation-list">
      <Toolbar title="Messenger" />
      <ChatSearch />

      <div className="message-list-container">{chatListItems}</div>
    </div>
  );
}
