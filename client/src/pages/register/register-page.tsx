import React from 'react';
import FormBackground from 'components/form-background';
import { RegisterForm, Title } from './register-components';

const RegisterPage = () => (
  <>
    <FormBackground />
    <RegisterForm>
      <Title />
    </RegisterForm>
  </>
);

export default RegisterPage;
