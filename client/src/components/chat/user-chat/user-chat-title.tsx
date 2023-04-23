import React from 'react';
import CurrentUser from 'user/CurrentUser';

const UserChatTitle = () => (
  <h5>
    {CurrentUser.getReceiver() !== undefined ? `@ ${(CurrentUser?.getReceiver() as { username: string }).username}` : '@ Say Hello To Your Friends!'}
  </h5>
);

export default UserChatTitle;
