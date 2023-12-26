import { env } from '../env';
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

export const validateTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { headers, query } = req;
  const token = headers.authorization;

  const { accessApiKey = null } = query;
  if (accessApiKey === env.ACCESS_API_KEY) next();

  if (!token) {
    return res.status(401).json({ mensagem: 'Token não fornecido.' });
  }

  const [_, removedBearer] = token.split('Bearer');

  jwt.verify(removedBearer.trim(), env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ mensagem: 'Token inválido.' });
    }

    next();
  });
};

export const validateAccessApiKeyMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { query } = req;
  const { accessApiKey } = query;

  if (accessApiKey !== env.ACCESS_API_KEY) res.status(401).end();

  next();
};
