import React from 'react';
import './user-list-style.css';

const UserListTitle: React.FC<ChildrenProp> = ({
  children,
}) => (
  <p className="text-uppercase m-0 user-list-title">{children}</p>
);

export default UserListTitle;
