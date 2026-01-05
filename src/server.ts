import express, { json } from 'express'
import type { Request, Response } from 'express'

const app = express()
const port = process.env.PORT;

app.use(json())

app.get('/', (req: Request, res: Response) => {
  res.status(201).json({player: "Ronaldo"})
})


app.listen(port, () => {
  console.log(`🔥 Server running at port localhost:${port}`);
  
})