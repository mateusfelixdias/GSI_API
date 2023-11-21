import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string(),
  PORT: z.number().optional().default(3333),
});

const _env = envSchema.safeParse(process.env);
console.log(process.env);
if (!_env.success) throw new Error('Invalid variable');

export const env = _env.data;
