import React from 'react';
import FormBackground from 'components/form/form-background';
import FormDiscordLogo from 'components/form/form-discord-logo';
import { FormInput, FormInputGroup, FormInputLabel } from 'components/form/form-input';
import FormPageContainer from 'components/form/form-page-container';
import FormTitle from 'components/form/form-title';
import { FormButton, FormLink } from 'components/form/form-action';
import routes from 'navigation/routes';
import FormLogin from 'components/form/login/form-login';

const LoginPage = () => (
  <>
    <FormBackground />
    <FormPageContainer>
      <FormDiscordLogo />
      <FormLogin>
        <FormTitle>Welcome back!</FormTitle>
        <FormInputGroup className="mb-2">
          <FormInputLabel htmlFor="email">email</FormInputLabel>
          <FormInput type="text" name="email" />
        </FormInputGroup>
        <FormInputGroup className="mb-4">
          <FormInputLabel htmlFor="password">password</FormInputLabel>
          <FormInput type="password" name="password" />
        </FormInputGroup>
        <FormButton>Login</FormButton>
        <FormLink href={routes.Register}>Register an account</FormLink>
      </FormLogin>
    </FormPageContainer>
  </>
);

export default LoginPage;
