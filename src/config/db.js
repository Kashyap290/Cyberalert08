// src/config/db.js
import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import { ENV } from "./env.js";
import { enlightTable } from "../db/schema.js";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "your_password", // Replace with your password
  database: "enlightdb",
});

export const db = drizzle(pool, { schema: { enlightTable }, mode: 'default' });

