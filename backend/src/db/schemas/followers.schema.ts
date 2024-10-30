import {integer, pgTable, varchar, timestamp, text, foreignKey} from 'drizzle-orm/pg-core';
import {usersTable} from './users.schema';

export const followersTable = pgTable('followers', {
  id: integer('id').primaryKey().notNull(),
  user_id: integer('user_id').notNull().references(() => usersTable.id),
  follower_id: integer('follower_id').notNull().references(() => usersTable.id),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull(),
})