import ChatPageLayout from 'components/chat/chat-page-layout';
import UserChatSection from 'components/chat/user-chat/user-chat-section';
import UserChatTitle from 'components/chat/user-chat/user-chat-title';
import UserList from 'components/chat/user-list/user-list';
import UserListSection from 'components/chat/user-list/user-list-section';
import UserListTitle from 'components/chat/user-list/user-list-title';
import React from 'react';

const ChatPage = () => (
  <ChatPageLayout>
    <UserListSection>
      <UserListTitle>direct messages</UserListTitle>
      <UserList />
    </UserListSection>
    <UserChatSection>
      <UserChatTitle />
    </UserChatSection>
  </ChatPageLayout>
);

export default ChatPage;
