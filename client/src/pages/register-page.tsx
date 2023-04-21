import React from 'react';
import { Input, InputGroup, InputLabel } from 'components/form/form-input';
import FormBackground from '../components/form/form-background';
import DiscordLogo from '../components/form/form-discord-logo';
import {
  ButtonRegister,
  Container,
  LoginLink, RegisterForm, Title,
} from '../components/form/register/register-components';

const RegisterPage = () => (
  <>
    <FormBackground />
    <Container>
      <DiscordLogo />
      <RegisterForm>
        <Title />
        <InputGroup className="mb-2">
          <InputLabel htmlFor="email">email</InputLabel>
          <Input type="text" name="email" />
        </InputGroup>
        <InputGroup className="mb-2">
          <InputLabel htmlFor="username">username</InputLabel>
          <Input type="text" name="username" />
        </InputGroup>
        <InputGroup className="mb-4">
          <InputLabel htmlFor="password">password</InputLabel>
          <Input type="password" name="password" />
        </InputGroup>
        <ButtonRegister />
        <LoginLink />
      </RegisterForm>
    </Container>
  </>
);

export default RegisterPage;
