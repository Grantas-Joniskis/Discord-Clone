import { FormEvent } from 'react';
import routes from 'navigation/routes';
import ApiService from 'services/api-service';
import validateRegisterInput from 'validation/register-form-validation';

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
    const response = ApiService.postRegisterUser(registerUser);
    console.log('Response:', response);
  } catch (error) {
    console.error('Error:', error);
    return;
  }

  // DIRTY AF
  window.location.assign(routes.Login);
};

export default handleRegister;
