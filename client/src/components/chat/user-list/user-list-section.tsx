import React from 'react';
import './user-list-style.css';

const UerListSection: React.FC<ChildrenProps> = ({
  children,
}) => (
  <div className="user-list-section px-2 py-1">
    {children}
  </div>
);

export default UerListSection;
