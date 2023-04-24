import React, { useRef } from 'react';
import './user-chat-style.css';
import UserChatMessagesProps from 'types/chat/user-chat-messages';
import CurrentUser from 'user/CurrentUser';
import UserManager from 'user/UserManager';
import defaultDiscordPfp from '../../../images/discord-default-pfp.jpg';

const UserChatMessages: React.FC<UserChatMessagesProps> = ({
  messages,
}) => {
  const messagesRef = useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scroll({
        top: messagesRef.current.scrollHeight - messagesRef.current.clientHeight,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  return (
    <div className="h-100 mb-2" ref={messagesRef} style={{ overflowY: 'auto' }}>
      {messages.map((message, index) => (
      // eslint-disable-next-line react/no-array-index-key
        <div className="rounded-3 px-2 d-flex mb-3" key={index}>
          <div>
            <img className="rounded-circle me-2 user-chat-message-img" src={defaultDiscordPfp} alt="default discord avatar" />
          </div>
          <div className="user-chat-message-text">
            <h6 className="mb-0">{message.from === CurrentUser.getId() ? CurrentUser.getUsername() : UserManager.getUserFromId(message.from)?.username ?? 'Unknown user'}</h6>
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserChatMessages;
