// src/db/schema.js
import { mysqlTable, int, varchar, timestamp } from "drizzle-orm/mysql-core";

export const enlightTable = mysqlTable("enlight", { // Make sure this line is exactly as written
  id: int("id").autoincrement().primaryKey(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  noteId: int("note_id").notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  image: varchar("image", { length: 255 }),
  learnTime: varchar("learn_time", { length: 255 }),
  servings: varchar("servings", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
});