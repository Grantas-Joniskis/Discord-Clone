import React from 'react';
import { Input, InputGroup, InputLabel } from 'components/form/form-input';
import FormPageContainer from 'components/form/form-page-container';
import Title from 'components/form/form-title';
import { FormButton, FormLink } from 'components/form/form-action';
import routes from 'navigation/routes';
import FormBackground from '../components/form/form-background';
import DiscordLogo from '../components/form/form-discord-logo';
import {
  RegisterForm,
} from '../components/form/register/register-components';

const RegisterPage = () => (
  <>
    <FormBackground />
    <FormPageContainer>
      <DiscordLogo />
      <RegisterForm>
        <Title>Create an account</Title>
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
        <FormButton>Register</FormButton>
        <FormLink href={routes.Login}>Already have an account?</FormLink>
      </RegisterForm>
    </FormPageContainer>
  </>
);

export default RegisterPage;
