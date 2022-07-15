import Express, { Request, Response } from "express";
import { hashSync } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from '../db/prisma.db'
import { validationResult } from "express-validator";

const listAll = async (req: Request, res: Response) => {
    const users = await prisma.users.findMany({
        select: {
            username: true,
            userlevel: true
        }

    })

    res.status(200).send(users);
}

const getOneById = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const id = Number(req.params.id);
    const user = await prisma.users.findUnique({
        where: {
            id: id
        },
        select: {
            username: true,
            userlevel: true
        }

    })

    res.status(200).send(user);
}

const register = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

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

// const updateUser = async (req: Request, res: Response) => {
//     const id = Number(req.params.id)

//     const { password, userlevel } = req.body
//     const user = await prisma.users.update({
//         where: {
//             id: id
//         },
//         data: {
//             password: hashSync(password, 10),
//             userlevel: userlevel,

//         }
//     })

//     res.send(user)
// }

export { listAll, getOneById, register }