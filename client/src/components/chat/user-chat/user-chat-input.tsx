import React from 'react';
import './user-chat-style.css';
import handleUserChatInput from 'events/user-chat-input-event';

const UserChatInput = () => {
  const messageRef = React.createRef<HTMLInputElement>();

  return (
    <div>
      <form onSubmit={(e) => handleUserChatInput(e, messageRef)}>
        <input className="rounded px-3 user-chat-input" type="text" placeholder="Message" name="message" autoComplete="off" ref={messageRef} />
      </form>
    </div>
  );
};

export default UserChatInput;
