import { Request, Response } from 'express';

export const getWelcomeMessage = {
  index: (_req: Request, res: Response) => {
    res.json({
      data: "welcome api"
    });
  },
}