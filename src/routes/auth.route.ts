import { Router, Request, Response } from "express";

import login from "../controllers/auth.controller";

const authRouter = Router()
authRouter.post('/login', login)

export default authRouter