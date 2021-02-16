import React, {useState, useEffect} from 'react';
import ChatSearch from './ChatSearch';
import ChatListItem from './ChatListItem';
import Toolbar from './Toolbar';
import axios from 'axios';
import fixtures from '../helpers/__mocks__/axios'

import './ChatList.css';

export default function ChatList(props) {

  const { getConversations } = props;

  const chatListData = getConversations();

  const chatListItems = chatListData.map((item, index) => <ChatListItem
      key={index}
      data={{name: item.name, message: item.message}}
      setJobView={props.setJobView}
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
