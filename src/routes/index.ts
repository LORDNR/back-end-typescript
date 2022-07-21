import { Router, Request, Response } from 'express'
import { categoryRouter } from './category.route'
import { dataRoute } from './data.route'
import { userRouter } from './user.route'
import authRouter from './auth.route'
import multer from 'multer';

const Multer = multer({
    storage: multer.memoryStorage(),
    limits: {
        fieldSize: 1024 * 1024
    },
})

const routes = Router()

routes.use('/category', Multer.single('image'), categoryRouter)
routes.use('/data', Multer.single('image'), dataRoute)
routes.use('/user', userRouter)
routes.use('/auth', authRouter)

export default routes