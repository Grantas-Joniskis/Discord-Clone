import React from 'react';
import './user-list-style.css';
import ChatHookProps from 'types/chat/chat-hooks';

const UerList: React.FC<ChatHookProps> = ({
  children,
}) => (
  <div className="user-list bg-light px-2 py-1">
    {children}
  </div>
);

export default UerList;
