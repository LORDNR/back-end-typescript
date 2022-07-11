import { Router } from "express";
import { listAll, getOneById, register, updateUser } from '../controllers/user.controller'

export const userRouter = Router()

userRouter.get('/', listAll)
userRouter.get('/:id', getOneById)
userRouter.post('/', register)
// userRouter.post('/login', login)
userRouter.put('/:id', updateUser)



