import React from 'react';
import Linkify from 'react-linkify';

const Message = props => {
  return (
    <div className='message'>
      <Linkify properties={{ target: '_blank' }}>{props.message}</Linkify>
    </div>
  );
};

export default Message;