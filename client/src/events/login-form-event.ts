import { FormEvent } from 'react';
import AxiosService from 'services/axios/axios-service';
import validateLoginInput from 'validation/login-form-validation';

const handleLogin = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const data = Object.fromEntries(formData.entries());
  const loginUser: LoginUser = {
    email: String(data.email),
    password: String(data.password),
  };

  if (!validateLoginInput(loginUser)) return;

  try {
    const response = AxiosService.postLoginUser(loginUser);
    console.log('Response:', response);
  } catch (error) {
    console.error('Error:', error);
  }
};

export default handleLogin;
