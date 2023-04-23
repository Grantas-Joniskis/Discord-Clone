import React from 'react';
import './user-chat-style.css';

const UserChatSection: React.FC<ChildrenProp> = ({
  children,
}) => (
  <div className="d-flex flex-column justify-content-between user-chat-section p-2">{children}</div>
);

export default UserChatSection;
