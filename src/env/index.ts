import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  SECRET_KEY: z.string(),
  DATABASE_URL: z.string(),
  ACCESS_API_KEY: z.string(),
  PORT: z.string().default('3333'),
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
});

const _env = envSchema.safeParse(process.env);
if (!_env.success) throw new Error('Invalid variable');

export const env = _env.data;
