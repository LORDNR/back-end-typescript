import { Router, Request, Response } from "express";
import { userInfo } from "os";
import passport from 'passport'
import login from "../controllers/auth.controller";

const authRouter = Router()
authRouter.post('/login', login)

export default authRouter