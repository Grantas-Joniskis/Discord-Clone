import axios from 'axios';
import config from 'config/config';
import routes from 'navigation/routes';
import LoginUser from 'types/login-user';
import RegisterUser from 'types/register-user';

class AxiosService {
  private static api = axios.create({
    baseURL: `${config.server.protocol}://${config.server.domain}:${config.server.port}`,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  public static async postRegisterUser(registerUser: RegisterUser) {
    return AxiosService.api.post(routes.Register, {
      email: registerUser.email,
      username: registerUser.username,
      password: registerUser.password,
    });
  }

  public static postLoginUser(loginUser: LoginUser) {
    return AxiosService.api.post(routes.Login, {
      email: loginUser.email,
      password: loginUser.password,
    });
  }

  public static getUsers(token: string) {
    return AxiosService.api.get(routes.Users, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default AxiosService;
