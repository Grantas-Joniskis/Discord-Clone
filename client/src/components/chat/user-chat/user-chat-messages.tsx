import React from 'react';
import UserChatMessagesProps from 'types/chat/user-chat-messages';
import CurrentUser from 'user/CurrentUser';
import UserManager from 'user/UserManager';
import defaultDiscordPfp from '../../../images/discord-default-pfp.jpg';

const UserChatMessages: React.FC<UserChatMessagesProps> = ({
  messages,
}) => (
  <div className="h-100" style={{ overflowY: 'auto' }}>
    {messages.map((message, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className="rounded-3 px-2 d-flex" key={index}>
        <div>
          <img className="rounded-circle list-user-pfp me-2" src={defaultDiscordPfp} alt="default discord avatar" />
        </div>
        <div>
          <h3 className="h6">{message.from === CurrentUser.getId() ? CurrentUser.getUsername() : UserManager.getUserFromId(message.from)?.username ?? 'Unknown user'}</h3>
          {message.text}
        </div>
      </div>
    ))}
  </div>
);

export default UserChatMessages;