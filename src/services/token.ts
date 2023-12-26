import { env } from '../env';
import jwt from 'jsonwebtoken';

export const generateToken = () => {
  const payload = { exp: Math.floor(Date.now() / 1000) + 6 * 60 * 60 };

  const token = jwt.sign(payload, env.SECRET_KEY);
  return token;
};
