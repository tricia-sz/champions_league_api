import { noContent, ok } from "../utils/http-helper.js";

export const getPlayerService = async () => {
    const data = null
    let response = null;

    if(data) {
       response = await ok(data);
    } else {
       response = await noContent();
    }
    
  return response;
}