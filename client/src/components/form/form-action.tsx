import React from 'react';
import './styles/form-styles.css';
import FormLinkProps from 'types/form/form-link';

export const FormButton: React.FC<ChildrenProps> = ({
  children,
}) => (
  <button className="col-12 mb-1 rounded form-button" type="submit">{children}</button>
);

export const FormLink: React.FC<FormLinkProps> = ({
  children,
  href = '#',
}) => (
  <a className="form-link" href={href}>{children}</a>
);
