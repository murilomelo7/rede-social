export default {
  port: process.env.PORT || 3001,
  environment: process.env.NODE_ENV || "development",
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
      },
    },
  },
};
