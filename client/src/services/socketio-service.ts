import { Socket, io } from 'socket.io-client';

class SocketioService {
  private static ioConnection: Socket | undefined;

  public static createConnection(token: string) {
    SocketioService.ioConnection = io('http://localhost:8889', { auth: { token } });
    SocketioService.setupConnection();
  }

  public static getSocket(): Socket | undefined {
    return SocketioService.ioConnection;
  }

  private static setupConnection() {
    SocketioService.connect();
    SocketioService.disconnect();
  }

  private static connect() {
    if (SocketioService.ioConnection === undefined) return;
    SocketioService.ioConnection.on('connect', () => {
      console.log('Connected to the socket!');
    });
  }

  private static disconnect() {
    if (SocketioService.ioConnection === undefined) return;
    SocketioService.ioConnection.on('disconnect', () => {
      console.log('Disconnected from the socket!');
    });
  }
}

export default SocketioService;
