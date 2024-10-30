import {integer, pgTable, varchar, timestamp, text, foreignKey} from 'drizzle-orm/pg-core';

import {usersTable} from './users.schema';
import {postsTable} from './posts.schema';

export const likesTable = pgTable('likes', {
  id: integer('id').primaryKey().notNull(),
  user_id: integer('user_id').notNull().references(() => usersTable.id),
  post_id: integer('post_id').notNull().references(() => postsTable.id),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull(),
})