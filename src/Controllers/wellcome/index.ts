import { Request, Response } from 'express';

export const getWelcomeMessage = {
  index: (_req: Request, res: Response) => {
    res.json({
      statusCode: `${res.statusCode}`,
      data: "Test route - welcome api"
    });
  },
}