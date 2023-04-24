const {
  VITE_SERVER_PROTOCOL,
  VITE_SERVER_DOMAIN,
  VITE_SERVER_PORT,
  VITE_SOCKET_PROTOCOL,
  VITE_SOCKET_DOMAIN,
  VITE_SOCKET_PORT,
} = import.meta.env;

if (!VITE_SERVER_PROTOCOL || !VITE_SERVER_DOMAIN || !VITE_SERVER_PORT
  || !VITE_SOCKET_PROTOCOL || !VITE_SOCKET_DOMAIN || !VITE_SOCKET_PORT) {
  throw new Error("You must configure constants in '.env' file.");
}

const config = {
  server: {
    protocol: VITE_SERVER_PROTOCOL,
    domain: VITE_SERVER_DOMAIN,
    port: VITE_SERVER_PORT,
  },
  socket: {
    protocol: VITE_SOCKET_PROTOCOL,
    domain: VITE_SOCKET_DOMAIN,
    port: VITE_SOCKET_PORT,
  },
};

export default config;
