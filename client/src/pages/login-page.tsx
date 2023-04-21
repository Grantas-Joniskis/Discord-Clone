import React from 'react';
import FormBackground from 'components/form/form-background';
import DiscordLogo from 'components/form/form-discord-logo';
import { Input, InputGroup, InputLabel } from 'components/form/form-input';
import FormPageContainer from 'components/form/form-page-container';
import Title from 'components/form/form-title';
import { FormButton, FormLink } from 'components/form/form-action';
import routes from 'navigation/routes';
import {
  LoginForm,
} from '../components/form/login/login-components';

const LoginPage = () => (
  <>
    <FormBackground />
    <FormPageContainer>
      <DiscordLogo />
      <LoginForm>
        <Title>Welcome back!</Title>
        <InputGroup className="mb-2">
          <InputLabel htmlFor="email">email</InputLabel>
          <Input type="text" name="email" />
        </InputGroup>
        <InputGroup className="mb-4">
          <InputLabel htmlFor="password">password</InputLabel>
          <Input type="password" name="password" />
        </InputGroup>
        <FormButton>Login</FormButton>
        <FormLink href={routes.Register}>Register an account</FormLink>
      </LoginForm>
    </FormPageContainer>
  </>
);

export default LoginPage;
