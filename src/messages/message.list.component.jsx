import React, {useEffect} from 'react';
import Message from "./message.component";

const MessagesList = props => {
  let messageBox = undefined;

  useEffect(() => {
    if(messageBox){
      messageBox.scrollTop = messageBox.scrollheight;
    }
  });

  return (
    <div className='messages-list' ref={element => messageBox = element}>
      {props.messages.map((msg, idx) => <Message message={msg} key={idx} />)}
    </div>
  );
};

export default MessagesList;