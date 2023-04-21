import React from 'react';
import FormBackground from 'components/form/form-background';
import DiscordLogo from 'components/form/form-discord-logo';
import { Input, InputGroup, InputLabel } from 'components/form/form-input';
import {
  ButtonLogin,
  Container, LoginForm, RegisterLink, Title,
} from '../components/form/login/login-components';

const LoginPage = () => (
  <>
    <FormBackground />
    <Container>
      <DiscordLogo />
      <LoginForm>
        <Title />
        <InputGroup className="mb-2">
          <InputLabel htmlFor="email">email</InputLabel>
          <Input type="text" name="email" />
        </InputGroup>
        <InputGroup className="mb-4">
          <InputLabel htmlFor="password">password</InputLabel>
          <Input type="password" name="password" />
        </InputGroup>
        <ButtonLogin />
        <RegisterLink />
      </LoginForm>
    </Container>
  </>
);

export default LoginPage;
