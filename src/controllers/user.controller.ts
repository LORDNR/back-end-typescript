import Express, { Request, Response } from "express";
import { hashSync } from 'bcrypt'
import jwt from 'jsonwebtoken'
import prisma from '../db/prisma.db'


const register = async (req: Request, res: Response) => {
    const user = await prisma.users.create({
        data: {
            username: req.body.username,
            password: hashSync(req.body.password, 10),
        },
    });
    res.send({
        success: true,
        message: "User created successfully.",
        user: {
            id: user.id,
            username: user.username,

        },
    });
}

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

    const token = await jwt.sign(payload, "Random String", { expiresIn: "1d" });

    return res.status(200).send({
        success: true,
        message: "Logged in successfully.",
        token: "Bearer " + token,
    });
};
export { register, login }