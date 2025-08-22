import express from "express"
import { ENV } from "./config/env.js";
import { db } from "./config/db.js";
import { enlightTable } from "./db/schema.js";

const app = express();
const PORT = ENV.PORT || 5001;

// This endpoint will test the database connection
app.get("/api/health", async (req, res) => {
  try {
    // Perform a simple query to check the connection
   await db.select().from(enlightTable).limit(1);
    res.status(200).json({ success: true, message: "Database connection successful" });
  } catch (error) {
    console.error("Database connection failed:", error);
    res.status(500).json({ success: false, message: "Database connection failed" });
  }
});

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});