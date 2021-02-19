import {useEffect} from 'react';
// import shave from 'shave';

import './ChatListItem.css';

export default function ChatListItem(props) {
    // useEffect(() => {
  //   shave('.conversation-snippet', 20);
  // })

    const { id, title, message } = props.data;

    // console.log('THE CHAT ID IS ',id)

     return (
      <div className="conversation-list-item" onClick={() => props.setChat(id)}>
        <div key={id} className="conversation-info">
          <h1 className="conversation-title">{ title }</h1>
          <p className="conversation-snippet">{ message }</p>
        </div>
      </div>

    );
}
