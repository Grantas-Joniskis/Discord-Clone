import { FormEvent } from 'react';
import AxiosService from 'services/axios-service';
import RegisterUser from 'types/form/register-user';
import validateRegisterInput from 'validation/register-form-validation';

const handleRegister = async (
  event: FormEvent<HTMLFormElement>,
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>,
): Promise<void> => {
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

    setCompleted(true);
  } catch (error) {
    console.error('Error:', error);
  }
};

export default handleRegister;
