import React from 'react';
import './styles/form-styles.css';

const FormTitle: React.FC<ChildrenProp> = ({
  children,
}) => (
  <h1 className="display-6 text-center mb-3 form-title">{children}</h1>
);

export default FormTitle;
