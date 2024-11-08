import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

const DefaultSchema = {
  id: text("id").notNull().primaryKey(),
  createdAt: timestamp("created_at").default(new Date()),
  updatedAt: timestamp("updated_at").default(new Date()),
  deletedAt: timestamp("deleted_at").default(new Date()),
};

export const User = pgTable("users", {
  ...DefaultSchema,
  email: text("email").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  username: text("username").unique().notNull(),
});
