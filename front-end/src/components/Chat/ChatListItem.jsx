import React, {useEffect} from 'react';
// import shave from 'shave';

import './ChatListItem.css';

export default function ChatListItem(props) {
  // useEffect(() => {
  //   shave('.conversation-snippet', 20);
  // })

    const { name, text } = props.data;

    return (
      <div className="conversation-list-item">
        <div className="conversation-info">
          <h1 className="conversation-title">{ name }</h1>
          <p className="conversation-snippet">{ text }</p>
        </div>
      </div>
    );
}