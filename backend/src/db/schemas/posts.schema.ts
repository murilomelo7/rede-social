import { integer, pgTable, varchar, timestamp, text, foreignKey } from 'drizzle-orm/pg-core';
import { usersTable } from './users.schema';

export const postsTable = pgTable('posts', {
  id: integer('id').primaryKey().notNull(),
  user_id: integer('user_id').notNull().references(() => usersTable.id),
  title: varchar('title', {length: 255}).notNull(),
  content: text('content').notNull(),
  image: varchar('image', {length: 255}),
  likes_count: integer('likes_count').notNull().default(0),
  comments_count: integer('comments_count').notNull().default(0),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull(),
})