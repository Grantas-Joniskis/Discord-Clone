import React from 'react';

const UserChat: React.FC<ChildrenProp> = ({
  children,
}) => (
  <div className="d-flex">{children}</div>
);

export default UserChat;
