import React from 'react';
import './register-style.css';

import discordTextLogo from '../../images/discord-text-logo.png';
import discordWhiteLogo from '../../images/discord-white-logo.png';

export const Container: React.FC<ChildrenProp> = ({
  children,
}) => (
  <div className="page-container vw-100 p-3 d-flex flex-column justify-content-center">
    {children}
  </div>
);

export const DiscordLogo = () => (
  <div className="discord-logo text-center">
    <img className="discord-white-logo mx-2" src={discordWhiteLogo} alt="Discord White Logo" />
    <img className="discord-text-logo" src={discordTextLogo} alt="Discord Text Logo" />
  </div>
);

export const RegisterForm: React.FC<ChildrenProp> = ({
  children,
}) => (
  <form className="register-form rounded p-4 col-12">
    {children}
  </form>
);

export const Header: React.FC<ChildrenProp> = ({
  children,
}) => (
  <div className="mb-3">
    {children}
  </div>
);

export const Title = () => (
  <h1 className="display-6 fs-2 text-center title m-0">Create an account</h1>
);

export const Body: React.FC<ChildrenProp> = ({
  children,
}) => (
  <div>
    {children}
  </div>
);

export const InputEmail = () => (
  <div className="mb-2">
    <label className="form-label register-form-label text-uppercase mb-1" htmlFor="email">email</label>
    <input className="form-control border border-black register-form-input" type="email" id="email" />
  </div>
);

export const InputUsername = () => (
  <div className="mb-2">
    <label className="form-label register-form-label text-uppercase mb-1" htmlFor="username">username</label>
    <input className="form-control border border-black register-form-input" type="text" id="username" />
  </div>
);

export const InputPassword = () => (
  <div className="mb-4">
    <label className="form-label text-uppercase mb-1 register-form-label " htmlFor="password">password</label>
    <input className="form-control border border-black register-form-input" type="password" id="password" />
  </div>
);

export const ButtonContinue = () => (
  <button className="col-12 p-2 mb-1 rounded register-form-button" type="submit">Continue</button>
);

export const LoginLink = () => (
  <a className="register-form-link" href="/login">Already have an account?</a>
);
