import "dotenv/config";
import { ENV } from "./src/config/env.js";

export default {
  schema: "./src/db/schema.js",
  out: "./src/db/migrations",
  dialect: "mysql",
  dbCredentials: { url: ENV.DATABASE_URL },
};

