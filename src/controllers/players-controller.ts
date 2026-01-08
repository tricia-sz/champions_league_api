import { type Request, type Response } from 'express';
import { getPlayerService } from '../services/players-service.js';

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await getPlayerService();

    res.status(httpResponse.statusCode).json(httpResponse.body);

}

