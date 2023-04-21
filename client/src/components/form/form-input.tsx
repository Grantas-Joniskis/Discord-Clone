import React from 'react';
import './styles.css';

type InputGroupProps = ChildrenProp & {
  className?: string,
};

type InputLabelProps = ChildrenProp & {
  htmlFor?: string,
};

type InputProps = {
  type?: string,
  name?: string,
};

export const InputGroup: React.FC<InputGroupProps> = ({
  children,
  className = '',
}) => (
  <div className={className}>
    {children}
  </div>
);

export const InputLabel: React.FC<InputLabelProps> = ({
  children,
  htmlFor = '',
}) => (
  <label className="form-label form-label text-uppercase mb-1" htmlFor={htmlFor}>{children}</label>
);

export const Input: React.FC<InputProps> = ({
  type = 'text',
  name = '',
}) => (
  <input className="form-control border border-black form-input" autoComplete="off" type={type} name={name} />
);
