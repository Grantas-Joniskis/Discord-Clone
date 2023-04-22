import UserList from 'components/chat/user-list/user-list';
import UserListSection from 'components/chat/user-list/user-list-section';
import UserListTitle from 'components/chat/user-list/user-list-title';
import React from 'react';

const ChatPage = () => (
  <div>
    <UserListSection>
      <UserListTitle>direct messages</UserListTitle>
      <UserList />
    </UserListSection>
  </div>
);

export default ChatPage;
