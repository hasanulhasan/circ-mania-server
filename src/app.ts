import express, { Application, Request, Response } from 'express';
import cors from "cors"
import { inningsRoutes } from './app/innings/innings.routes';

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/run', inningsRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('CircMania backend started')
})

export default app;