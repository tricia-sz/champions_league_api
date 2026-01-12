import { type Request, type Response } from 'express';
import * as service from '../services/players-service.js';
import { noContent } from '../utils/http-helper.js';

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await service.getPlayerService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
}


export const getPlayerById =  async(req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const httpResponse = await service.getPlayerByIdService(id); 

  res.status(httpResponse.statusCode).json(httpResponse.body);

}

export const postPlayer = async(req: Request, res: Response) => {
  const bodyValue = req.body

  const httpResponse = await service.createPlayerService(bodyValue)

  if(httpResponse) {
    res.status(httpResponse.statusCode).json(await httpResponse.body);

  } else {
    const response = noContent()

    res.status((await response).statusCode).json((await response).body)

  }
}

{
  "id": 9001,
  "name": "Rivelino",
  "blub": "Sport Club Corinthians",
  "nationality": "Brasil",
  "position": "Meio Campo",
  "statistics": {
    "Overall": 99,
    "Pace": 99,
    "Shooting": 99,
    "Passing": 99,
    "Dribbling": 99,
    "Defending": 99,
    "Physical": 99
  }
}