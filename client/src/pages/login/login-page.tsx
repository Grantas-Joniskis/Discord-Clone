import FormBackground from 'components/form-background';
import React from 'react';
import {
  Body,
  ButtonLogin,
  Container, DiscordLogo, Header, InputEmail, InputPassword, LoginForm, RegisterLink, Title,
} from './login-components';

const LoginPage = () => (
  <>
    <FormBackground />
    <Container>
      <DiscordLogo />
      <LoginForm>
        <Header>
          <Title />
        </Header>
        <Body>
          <InputEmail />
          <InputPassword />
          <ButtonLogin />
          <RegisterLink />
        </Body>
      </LoginForm>
    </Container>
  </>
);

export default LoginPage;
