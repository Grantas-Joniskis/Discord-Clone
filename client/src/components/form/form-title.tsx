import React from 'react';
import './form-styles.css';

const Title: React.FC<ChildrenProp> = ({
  children,
}) => (
  <h1 className="display-6 text-center mb-3 form-title">{children}</h1>
);

export default Title;
