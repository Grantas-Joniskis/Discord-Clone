import React from 'react';
import './user-list-style.css';

const UserListTitle: React.FC<ChildrenProp> = ({
  children,
}) => (
  <p className="text-uppercase mb-1 user-list-title">{children}</p>
);

export default UserListTitle;
