import 'dotenv/config'

import Express, { Application, Request, Response } from 'express'
import cors from 'cors'

import routes from './routes'
import { read } from 'fs';



const app: Application = Express();
const port: number | string = process.env.PORT || 3000;

app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));


app.use('/', routes)

app.get('/', (req: Request, res: Response) => {
    return res.json({
        status: "success"
    })
})


app.listen(port, () => console.log(`welcome to http://localhost:${port}/`)
);