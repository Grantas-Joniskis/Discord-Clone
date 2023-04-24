import React from 'react';
import './user-chat-style.css';
import handleUserChatInput from 'events/user-chat-input-event';

const UserChatInput = () => {
  const messageRef = React.createRef<HTMLInputElement>();

  return (
    <div>
      <form onSubmit={(e) => handleUserChatInput(e, messageRef)}>
        <input className="rounded user-chat-input px-1" type="text" placeholder="Message" name="message" ref={messageRef} />
      </form>
    </div>
  );
};

export default UserChatInput;
