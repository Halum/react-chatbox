import React from 'react';
import './chat.opener.style.css';

const ChatOpener = props => {

  return (
    <button className="chat-open"
      style={{display: props.show ? 'block' : 'none'}} 
      onClick={props.onOpen}>
        <div className='chat-open-title'>{props.title || "Chat"}</div>
    </button>
  );
};

export default ChatOpener;