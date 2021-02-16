import React, {useState, useEffect} from 'react';
import ChatSearch from './ChatSearch';
import ChatListItem from './ChatListItem';
import Toolbar from './Toolbar';
import axios from 'axios';

import './ChatList.css';

export default function ChatList(props) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations()
  },[])

 const getConversations = () => {
    axios.get('https://randomuser.me/api/?results=5').then(response => {
        let newConversations = response.data.results.map(result => {
          return {
            name: `${result.name.first} ${result.name.last}`,
            text: 'Hello world!'
          };
        });
        setConversations([...conversations, ...newConversations])
    });
  }

    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
        />
        <ChatSearch />
        {
          conversations.map(conversation =>
            <ChatListItem
              key={conversation.name}
              data={conversation}
            />
          )
        }
      </div>
    );
}