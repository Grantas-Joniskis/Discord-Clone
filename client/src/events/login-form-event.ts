import { FormEvent } from 'react';
import AxiosService from 'services/axios/axios-service';
import SocketioService from 'services/socketio/socketio-service';
import LoginUser from 'types/login-user';
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
    const response = await AxiosService.postLoginUser(loginUser);
    SocketioService.createConnection(response.data.bearer);
    console.log('Response:', response);
  } catch (error) {
    console.error('Error:', error);
  }
};

export default handleLogin;
