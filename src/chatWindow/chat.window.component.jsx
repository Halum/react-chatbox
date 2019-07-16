import React, {useState} from 'react';
import './chat.window.style.scss';
import Header from './../header/header.component';

const ChatWindow = props => {
  return (
    <div className="chat-window"
      style={{display: props.show ? 'block' : 'none'}}>
      <Header
        title={props.title}
        onClose={props.onClose}
      />
    </div>
  );
};

export default ChatWindow;