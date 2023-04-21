import React from 'react';
import './login-style.css';
import handleLogin from 'events/login-form-event';

export const LoginForm: React.FC<ChildrenProp> = ({
  children,
}) => (
  <form className="login-form rounded p-4 col-12 py-md-5 px-lg-5" onSubmit={handleLogin}>
    {children}
  </form>
);

export const ButtonLogin = () => (
  <button className="col-12 mb-1 rounded login-form-button" type="submit">Login</button>
);

export const RegisterLink = () => (
  <a className="login-form-link" href="/register">Register an account</a>
);
