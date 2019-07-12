import React from "react";
import './style.css';

import ChatOpener from './chatOpener/chat.opener.component';

const ChatBox = props => {
  return (
    <ChatOpener>{props.title}</ChatOpener>
  );
}

export default ChatBox;