import { io } from 'socket.io-client';

const createConnection = (token: string) => {
  io('http://localhost:8889', { auth: { token } });
};

const SocketioService = {
  createConnection,
};

export default SocketioService;
