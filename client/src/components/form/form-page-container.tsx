import React from 'react';
import './styles/form-styles.css';

const FormPageContainer: React.FC<ChildrenProps> = ({
  children,
}) => (
  <div className="form-page-container vw-100 p-3 d-flex flex-column justify-content-center">
    {children}
  </div>
);

export default FormPageContainer;
