import React from "react";
import './style.css';

import ChatOpener from './chatOpener/chat.opener.component';
import ChatWindow from './chatWindow/chat.window.component';

const ChatBox = props => {
  return (
    // <ChatWindow/>
    <ChatOpener>{props.title}</ChatOpener>
  );
}

export default ChatBox;