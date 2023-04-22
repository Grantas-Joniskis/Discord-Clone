import { FormEvent } from 'react';
import routes from 'navigation/routes';
import AxiosService from 'services/axios/axios-service';
import validateRegisterInput from 'validation/register-form-validation';
import RegisterUser from 'types/register-user';

const handleRegister = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const data = Object.fromEntries(formData.entries());
  const registerUser: RegisterUser = {
    email: String(data.email),
    username: String(data.username),
    password: String(data.password),
  };

  if (!validateRegisterInput(registerUser)) return;

  try {
    const response = AxiosService.postRegisterUser(registerUser);
    console.log('Response:', response);
  } catch (error) {
    console.error('Error:', error);
    return;
  }

  // DIRTY AF
  window.location.assign(routes.Login);
};

export default handleRegister;
