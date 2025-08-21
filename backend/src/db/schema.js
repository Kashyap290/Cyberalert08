import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";


export const enlightTable = pgTable("enlight", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  noteId: integer("note_id").notNull(),
  title: text("title").notNull(),
  image: text("image"),
  learnTime: text("learn_time"),
  servings: text("servings"),
  createdAt: timestamp("created_at").defaultNow(),
});