import { Router, Request, Response } from 'express'
import { categoryRouter } from './category.route'
import { dataRoute } from './data.route'
import { userRouter } from './user.route'
import authRouter from './auth.route'

const routes = Router()

routes.use('/category', categoryRouter)
routes.use('/data', dataRoute)
routes.use('/user', userRouter)
routes.use('/auth', authRouter)

export default routes