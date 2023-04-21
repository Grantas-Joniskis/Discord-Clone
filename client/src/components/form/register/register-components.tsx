import React from 'react';
import './register-style.css';
import handleRegister from 'events/register-form-event';

export const RegisterForm: React.FC<ChildrenProp> = ({
  children,
}) => (
  <form className="register-form rounded p-4 col-12 py-md-5 px-lg-5" onSubmit={handleRegister}>
    {children}
  </form>
);

export const ButtonRegister = () => (
  <button className="col-12 mb-1 rounded register-form-button" type="submit">Register</button>
);

export const LoginLink = () => (
  <a className="register-form-link" href="/login">Already have an account?</a>
);
