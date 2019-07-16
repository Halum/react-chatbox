import React, {useState} from 'react';
import './chat.window.style.scss';
import Header from './../header/header.component';
import MessageList from './../messages/message.list.component';

const ChatWindow = props => {
  return (
    <div className="chat-window"
      style={{display: props.show ? 'block' : 'none'}}>
      <Header
        title={props.title}
        onClose={props.onClose}
      />
      <MessageList messages={props.messagesList} />
    </div>
  );
};

ChatWindow.defaultProps = {
  messagesList: []
}

export default ChatWindow;