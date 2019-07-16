import React, {useState} from "react";
import ChatOpener from './chatOpener/chat.opener.component';
import ChatWindow from './chatWindow/chat.window.component';

const ChatBox = props => {
  const [isOpen, updateChatWindowFlag] = useState(false);

  const openChat = () => updateChatWindowFlag(true);
  const closeChat = () => updateChatWindowFlag(false);

  return (
    <>
      <ChatWindow show={isOpen} title={props.title} onClose={closeChat} />
      <ChatOpener show={!isOpen} title={props.title} onOpen={openChat} />
    </>
  );
}

export default ChatBox;