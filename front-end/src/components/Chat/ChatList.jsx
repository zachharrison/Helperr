import React, {useState, useEffect} from 'react';
import ChatSearch from './ChatSearch';
import ChatListItem from './ChatListItem';
import Toolbar from './Toolbar';
import axios from 'axios';
import fixtures from '../helpers/__mocks__/axios'

import './ChatList.css';

export default function ChatList(props) {

  const { getConversations, setChat, setJobView } = props;

  const chatListData = getConversations();

    const chatListItems = chatListData.map((item) => <ChatListItem
        key={item.id}
        data={{id: item.id, name: item.name, message: item.message}}
        setJobView={setJobView}
        setChat={setChat}
        />
    );

    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
        />
        <ChatSearch />

        <div className="message-list-container">
          {chatListItems}
        </div>

      </div>
    );
}
