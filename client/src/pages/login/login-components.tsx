import React from 'react';
import './login-style.css';
import handleLogin from 'events/login-form-event';
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

export const LoginForm: React.FC<ChildrenProp> = ({
  children,
}) => (
  <form className="login-form rounded p-4 col-12 py-md-5 px-lg-5" onSubmit={handleLogin}>
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
  <h1 className="display-6 text-center m-0 login-title">Welcome back!</h1>
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
    <label className="form-label login-form-label text-uppercase mb-1" htmlFor="email">email</label>
    <input className="form-control border border-black login-form-input" type="text" name="email" />
  </div>
);

export const InputPassword = () => (
  <div className="mb-4">
    <label className="form-label text-uppercase mb-1 login-form-label " htmlFor="password">password</label>
    <input className="form-control border border-black login-form-input" type="password" name="password" />
  </div>
);

export const ButtonLogin = () => (
  <button className="col-12 mb-1 rounded login-form-button" type="submit">Login</button>
);

export const RegisterLink = () => (
  <a className="login-form-link" href="/register">Register an account</a>
);
