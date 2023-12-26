import { env } from '../env';
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

export const validateAccessMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { accessApiKey = null } = req.query;
  if (accessApiKey === env.ACCESS_API_KEY) {
    next();
    return;
  }

  const token = req.headers.authorization;

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
