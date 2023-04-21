import axios from 'axios';
import config from 'config/config';
import routes from 'navigation/routes';

const api = axios.create({
  baseURL: `${config.server.protocol}://${config.server.domain}:${config.server.port}`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const postRegisterUser = async (registerUser: RegisterUser) => {
  api.post(routes.Register, {
    email: registerUser.email,
    username: registerUser.username,
    password: registerUser.password,
  }).then((response) => {
    console.log(response);
  }).catch((error) => {
    console.log(error);
  });
};

const postLoginUser = async (loginUser: LoginUser) => {
  api.post(routes.Login, {
    email: loginUser.email,
    password: loginUser.password,
  }).then((response) => {
    console.log(response);
  }).catch((error) => {
    console.log(error);
  });
};

const AxiosService = {
  postRegisterUser,
  postLoginUser,
};

export default AxiosService;
