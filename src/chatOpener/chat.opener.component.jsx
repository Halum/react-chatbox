import React, { useState } from 'react';
import './chat.opener.style.css';

const ChatOpener = props => {
  const [display, setDisplay] = useState('block');

  return (
    <button className="chat-open"
      style={{display}} 
      onClick={()=>{
        setDisplay(display === 'block' ? 'none' : 'block');
        props.onOpen && props.onOpen();
      }}>
      {props.children || "Chat"}
    </button>
  );
};

export default ChatOpener;