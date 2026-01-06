import express  from 'express'
import { getPlayer } from './controllers/players-controller.js'

function createApp() {
  const app = express()
  
  app.use(express.json())

  app.get('/',getPlayer )

  return app;

}

export default createApp;