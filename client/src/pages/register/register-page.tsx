import React from 'react';
import FormBackground from 'components/form-background';
import {
  Body,
  ButtonContinue,
  Container,
  DiscordLogo,
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
          <ButtonContinue />
          <LoginLink />
        </Body>
      </RegisterForm>
    </Container>
  </>
);

export default RegisterPage;
