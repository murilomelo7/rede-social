import { integer, pgTable, varchar, timestamp, foreignKey } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
  id: integer('id').primaryKey().notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  username: varchar('username', { length: 255 }).notNull().unique(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  token: varchar('token', { length: 255 }),
  refresh_token: varchar('refresh_token', { length: 255 }),
  profile_picture: varchar('profile_picture', { length: 255 }),
  bio: varchar('bio', { length: 255 }),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull(),
});