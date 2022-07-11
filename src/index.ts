import 'dotenv/config'
import Express, { Application, Request, Response } from 'express'
import cors from 'cors'

import { categoryRouter, dataRoute, userRouter } from './routes'

const app: Application = Express();
const port: number | string = process.env.PORT || 3000;

app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use('/category', categoryRouter)
app.use('/data', dataRoute)
app.use('/', userRouter)


app.listen(port, () => console.log(`welcome to http://localhost:${port}/`)
);