import React from 'react';
import './form-styles.css';

type FormLinkProps = ChildrenProp & {
  href: string,
};

export const FormButton: React.FC<ChildrenProp> = ({
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
