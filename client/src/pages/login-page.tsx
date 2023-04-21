import React from 'react';
import FormBackground from 'components/general/form-background';
import DiscordLogo from 'components/general/form-discord-logo';
import {
  Body,
  ButtonLogin,
  Container, Header, InputEmail, InputPassword, LoginForm, RegisterLink, Title,
} from '../components/login/login-components';

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
