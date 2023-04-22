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
    AxiosService.api.post(routes.Register, {
      email: registerUser.email,
      username: registerUser.username,
      password: registerUser.password,
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  public static postLoginUser(loginUser: LoginUser) {
    return AxiosService.api.post(routes.Login, {
      email: loginUser.email,
      password: loginUser.password,
    });
  }
}

export default AxiosService;
