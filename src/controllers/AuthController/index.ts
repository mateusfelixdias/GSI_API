import { Request, Response } from 'express';
import { generateToken } from '../../services/token';

export const AuthController = {
  generateToken: (req: Request, res: Response) => {
    try {
      const token = generateToken();
      if (!token) res.status(400).end();

      res.json({ token }).end();
    } catch (error) {
      res.status(500).end();
    }
  },
};
