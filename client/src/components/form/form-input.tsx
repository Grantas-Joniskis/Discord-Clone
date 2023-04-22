import React from 'react';
import './styles/form-styles.css';
import FormInputGroupProps from 'types/form/form-input-groups';
import FormInputLabelProps from 'types/form/form-input-label';
import FormInputProps from 'types/form/form-input';

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
