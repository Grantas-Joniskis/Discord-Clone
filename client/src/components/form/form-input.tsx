import React from 'react';
import './styles/form-styles.css';

type FormInputGroupProps = ChildrenProp & {
  className?: string,
};

type FormInputLabelProps = ChildrenProp & {
  htmlFor?: string,
};

type FormInputProps = {
  type?: string,
  name?: string,
};

export const FormInputGroup: React.FC<FormInputGroupProps> = ({
  children,
  className = '',
}) => (
  <div className={className}>
    {children}
  </div>
);

export const FormInputLabel: React.FC<FormInputLabelProps> = ({
  children,
  htmlFor = '',
}) => (
  <label className="form-label form-label text-uppercase mb-1" htmlFor={htmlFor}>{children}</label>
);

export const FormInput: React.FC<FormInputProps> = ({
  type = 'text',
  name = '',
}) => (
  <input className="form-control border border-black form-input" autoComplete="off" type={type} name={name} />
);
