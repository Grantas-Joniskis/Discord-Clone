import React from 'react';
import FormBackground from 'components/general/form-background';
import DiscordLogo from 'components/general/form-discord-logo';
import {
  Body,
  ButtonRegister,
  Container,
  Header, InputEmail, InputPassword, InputUsername, LoginLink, RegisterForm, Title,
} from '../components/register/register-components';

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
