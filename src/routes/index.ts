import { Router, Request, Response } from 'express'
import { categoryRoute } from './category.route'
import { dataRoute } from './data.route'
import { userRoute } from './user.route'
import authRoute from './auth.route'
import multer from 'multer';
import { areaRoute } from './area.route'

const Multer = multer({
    storage: multer.memoryStorage(),
    limits: {
        fieldSize: 1024 * 1024
    },
})

const routes = Router()

routes.use('/category', Multer.single('image'), categoryRoute)
routes.use('/data', Multer.single('image'), dataRoute)
routes.use('/area', areaRoute)
routes.use('/user', userRoute)
routes.use('/auth', authRoute)

export default routes