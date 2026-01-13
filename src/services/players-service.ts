
import type { PlayerModel } from '../models/player-models.js';
import * as PlayerRepository from '../repositories/players-repository.js'
import * as httpResponse from "../utils/http-helper.js";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    let response = null;

    if(data) {
       response = await httpResponse.ok(data);
    } else {
       response = await httpResponse.noContent();
    }
    
  return response;
}

export const getPlayerByIdService = async (id: number) => {
  const data =  await PlayerRepository.findPlayerById(id)
  let response = null;

  if(data) {
    response = httpResponse.ok(data);
  } else {
    response = httpResponse.noContent()
  }

  return response;

};

export const createPlayerService = async (player: PlayerModel) => {
   let response = null;

  if(Object.keys(player).length !== 0 ) {
  response = await PlayerRepository.insertPlayer(player)

  response = httpResponse.created()
    
  } else {
    response = httpResponse.badRequest();
  }

  return response;

}