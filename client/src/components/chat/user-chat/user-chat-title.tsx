import React from 'react';
import './user-chat-style.css';
import CurrentUser from 'user/CurrentUser';

const UserChatTitle = () => (
  <h5 className="user-chat-title mb-4">
    {CurrentUser.getReceiver() !== undefined ? `@ ${(CurrentUser?.getReceiver() as { username: string }).username}` : '@ Say Hello To Your Friends!'}
  </h5>
);

export default UserChatTitle;
