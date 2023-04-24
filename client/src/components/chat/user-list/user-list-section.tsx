import React from 'react';
import './user-list-style.css';

const UerList: React.FC<ChildrenProp> = ({
  children,
}) => (
  <div className="user-list bg-light px-2 py-1">
    {children}
  </div>
);

export default UerList;
