import React from 'react';
import { FormInput, FormInputGroup, FormInputLabel } from 'components/form/form-input';
import FormPageContainer from 'components/form/form-page-container';
import FormTitle from 'components/form/form-title';
import { FormButton, FormLink } from 'components/form/form-action';
import routes from 'navigation/routes';
import FormRegister from 'components/form/register/form-register';
import FormBackground from '../components/form/form-background';
import FormDiscordLogo from '../components/form/form-discord-logo';

const RegisterPage = () => (
  <>
    <FormBackground />
    <FormPageContainer>
      <FormDiscordLogo />
      <FormRegister>
        <FormTitle>Create an account</FormTitle>
        <FormInputGroup className="mb-2">
          <FormInputLabel htmlFor="email">email</FormInputLabel>
          <FormInput type="text" name="email" />
        </FormInputGroup>
        <FormInputGroup className="mb-2">
          <FormInputLabel htmlFor="username">username</FormInputLabel>
          <FormInput type="text" name="username" />
        </FormInputGroup>
        <FormInputGroup className="mb-4">
          <FormInputLabel htmlFor="password">password</FormInputLabel>
          <FormInput type="password" name="password" />
        </FormInputGroup>
        <FormButton>Register</FormButton>
        <FormLink href={routes.Login}>Already have an account?</FormLink>
      </FormRegister>
    </FormPageContainer>
  </>
);

export default RegisterPage;
