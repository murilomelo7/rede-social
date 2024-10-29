import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

//! Aplica as mudanças no banco
//?  npx drizzle-kit push
//! Gera a migration 
//?  npx drizzle-kit generate
//! Executa a migration
//?  npx drizzle-kit migrate

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schemas',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});