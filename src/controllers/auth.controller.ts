import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import 'dotenv/config'
import prisma from "../db/prisma.db";



const login = async (req: Request, res: Response) => {
    const user = await prisma.users.findFirst({
        where: {
            username: {
                equals: req.body.username,
            },
        },
    });

    const payload = {
        username: user!.username,
        id: user!.id,
    };

    const token = await jwt.sign(payload, String(process.env.JWT_SECRET), { expiresIn: "1d" });

    return res.status(200).send({
        success: true,
        message: "Logged in successfully.",
        token: "Bearer " + token,
    });
};






export default login