import { fastify } from "fastify";
import pino from "pino";
import routes from "./routes/colors.route";
import dotenv from "dotenv";
dotenv.config();

const Port = process.env.PORT!;
const server = fastify({
  logger: pino({ level: "info" }),
});

// Activate plugins below:
server.register(routes);
server.register(require("fastify-cors"), {
  origin: "*",
});

const start = async () => {
  try {
    await server.listen(Port);
    console.log("Server started successfully");
  } catch (err: any) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
