import React from 'react';
import './form-register-style.css';
import handleRegister from 'events/register-form-event';

export const FormRegister: React.FC<ChildrenProp> = ({
  children,
}) => (
  <form className="register-form rounded p-4 col-12 py-md-5 px-lg-5" onSubmit={handleRegister}>
    {children}
  </form>
);

export default FormRegister;
