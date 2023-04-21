import React from 'react';
import './register-style.css';
import handleRegister from 'events/register-form-event';

export const Container: React.FC<ChildrenProp> = ({
  children,
}) => (
  <div className="page-container vw-100 p-3 d-flex flex-column justify-content-center">
    {children}
  </div>
);

export const RegisterForm: React.FC<ChildrenProp> = ({
  children,
}) => (
  <form className="register-form rounded p-4 col-12 py-md-5 px-lg-5" onSubmit={handleRegister}>
    {children}
  </form>
);

export const Title = () => (
  <h1 className="display-6 text-center mb-3 register-title">Create an account</h1>
);

export const ButtonRegister = () => (
  <button className="col-12 mb-1 rounded register-form-button" type="submit">Register</button>
);

export const LoginLink = () => (
  <a className="register-form-link" href="/login">Already have an account?</a>
);
