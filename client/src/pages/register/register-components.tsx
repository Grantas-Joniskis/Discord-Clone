import React from 'react';
import './register-style.css';

export const Title = () => (
  <h1 className="display-6 fs-2 text-center title">Create an account</h1>
);

export const RegisterForm: React.FC<ChildrenProp> = ({
  children,
}) => (
  <form className="bg-dark">
    {children}
  </form>
);
