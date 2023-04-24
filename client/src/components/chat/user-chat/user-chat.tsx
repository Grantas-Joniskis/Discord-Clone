import React from 'react';

const UserChat: React.FC<ChildrenProps> = ({
  children,
}) => (
  <div className="d-flex">{children}</div>
);

export default UserChat;
