import React from 'react';
import './form-styles.css';

const FormPageContainer: React.FC<ChildrenProp> = ({
  children,
}) => (
  <div className="form-page-container vw-100 p-3 d-flex flex-column justify-content-center">
    {children}
  </div>
);

export default FormPageContainer;
