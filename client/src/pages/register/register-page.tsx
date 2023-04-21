import React from 'react';
import FormBackground from 'components/form-background';
import DiscordLogo from 'components/form-discord-logo';
import {
  Body,
  ButtonRegister,
  Container,
  Header, InputEmail, InputPassword, InputUsername, LoginLink, RegisterForm, Title,
} from './register-components';

const RegisterPage = () => (
  <>
    <FormBackground />
    <Container>
      <DiscordLogo />
      <RegisterForm>
        <Header>
          <Title />
        </Header>
        <Body>
          <InputEmail />
          <InputUsername />
          <InputPassword />
          <ButtonRegister />
          <LoginLink />
        </Body>
      </RegisterForm>
    </Container>
  </>
);

export default RegisterPage;
