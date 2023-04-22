import UserList from 'components/chat/user-list/user-list';
import UserListTitle from 'components/chat/user-list/user-list-title';
import React from 'react';

const ChatPage = () => (
  <div>
    <UserList>
      <UserListTitle>direct messages</UserListTitle>
    </UserList>
  </div>
);

export default ChatPage;
