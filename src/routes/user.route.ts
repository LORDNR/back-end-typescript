import { Router } from "express";
import { listAll, getOneById, register } from '../controllers/user.controller'
import { getOneByIdSchema, registerSchema } from '../schema/user.schema'
export const userRouter = Router()

userRouter.get('/', listAll)
userRouter.get('/:id', getOneByIdSchema, getOneById)
userRouter.post('/', registerSchema, register)
// userRouter.post('/login', login)
// userRouter.put('/:id', updateUser)



