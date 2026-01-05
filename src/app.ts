import express  from 'express'
import type { Request, Response } from 'express'

function createApp() {
  const app = express()
  
  app.use(express.json())

  app.get('/', (req: Request, res: Response) => {
    res.status(200).json({player: "Ronaldo Gaucho"})
  })

  return app;

}

export default createApp;