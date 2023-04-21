import React from 'react';
import './form-login-style.css';
import handleLogin from 'events/login-form-event';

export const FormLogin: React.FC<ChildrenProp> = ({
  children,
}) => (
  <form className="login-form rounded p-4 col-12 py-md-5 px-lg-5" onSubmit={handleLogin}>
    {children}
  </form>
);

export default FormLogin;
