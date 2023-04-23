import React from 'react';
import ChatHookProps from 'types/chat/chat-hooks';

const UserChat: React.FC<ChatHookProps> = ({
  children,
}) => (
  <div className="d-flex">{children}</div>
);

export default UserChat;
