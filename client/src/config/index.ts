const {
  VITE_SERVER_PROTOCOL,
  VITE_SERVER_DOMAIN,
  VITE_SERVER_PORT,
} = import.meta.env;

if (!VITE_SERVER_PROTOCOL || !VITE_SERVER_DOMAIN || !VITE_SERVER_PORT) {
  throw new Error("You must configure constants in '.env' file.");
}

const config = {
  server: {
    protocol: VITE_SERVER_PROTOCOL,
    domain: VITE_SERVER_DOMAIN,
    port: VITE_SERVER_PORT,
  },
};

export default config;
