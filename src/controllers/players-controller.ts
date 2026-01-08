import type { Request, Response } from 'express';
import { getPlayerService } from '../services/players-service.js';
import { ok } from '../utils/http-helper.js';

export const getPlayer = async (req: Request, res: Response) => {
  const data = await getPlayerService()
  const response = await ok(data);

    res.status(response.statusCode).json(response.body)
}