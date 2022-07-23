import { Router } from "express";
import { listAll, getOneById, register } from '../controllers/user.controller'
import { getOneByIdSchema, registerSchema } from '../schema/user.schema'
export const userRoute = Router()

userRoute.get('/', listAll)
userRoute.get('/:id', getOneByIdSchema, getOneById)
userRoute.post('/', registerSchema, register)
// userRouter.post('/login', login)
// userRouter.put('/:id', updateUser)



