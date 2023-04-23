import axios from 'axios';
import config from 'config/config';
import routes from 'navigation/routes';
import LoginUser from 'types/form/login-user';
import RegisterUser from 'types/form/register-user';
import CurrentUser from 'user/CurrentUser';

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

  public static postMessage(message: string) {
    const link = `/private-message/${CurrentUser.getReceiver()?.id}`;
    return AxiosService.api.post(
      link,
      {
        text: message,
      },
      {
        headers: {
          Authorization: `Bearer ${CurrentUser.getToken()}`,
        },
      },
    );
  }

  public static getMessagesHistory(userId: number) {
    const link = `/private-message/${userId}/1`; // 1 = page
    return AxiosService.api.get(link, {
      headers: {
        Authorization: `Bearer ${CurrentUser.getToken()}`,
      },
    });
  }

  public static getUsers() {
    return AxiosService.api.get(routes.Users, {
      headers: {
        Authorization: `Bearer ${CurrentUser.getToken()}`,
      },
    });
  }
}

export default AxiosService;
