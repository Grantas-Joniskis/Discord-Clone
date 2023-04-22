import React from 'react';

const ChatPageLayout: React.FC<ChildrenProp> = ({
  children,
}) => (
  <div className="d-flex">{children}</div>
);

export default ChatPageLayout;
