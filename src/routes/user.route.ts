import Express, { Router } from "express";
import { register, login } from '../controllers/user.controller'

export const userRouter: Router = Express.Router()

userRouter.post('/register', register)
userRouter.post('/login', login)




