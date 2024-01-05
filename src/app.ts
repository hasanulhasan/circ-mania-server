import express, { Application, Request, Response } from 'express';
import cors from "cors"
// import routers from './routes';
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.use('/v1', routers)

app.get('/', (req: Request, res: Response) => {
  res.send('Teaching Torch backend started')
})

export default app;