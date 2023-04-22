import React from 'react';
import './user-chat-style.css';

const UserChatSection: React.FC<ChildrenProp> = ({
  children,
}) => (
  <div className="user-chat-section">{children}</div>
);

export default UserChatSection;
