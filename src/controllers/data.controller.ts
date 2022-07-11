import { Express, Request, Response } from "express"
import prisma from '../db/prisma.db'


const getData = async (req: Request, res: Response) => {
    const data = await prisma.data.findMany()

    if (data.length == 0) {
        let msg = "have not food";
    } else {
        let msg = "Successfully retrieved all Category";
    }

    res.send(data)
}

const getOneData = async (req: Request, res: Response) => {

    const id = Number(req.params.id);
    const data = await prisma.data.findUnique({
        where: {
            id: id
        }
    })
    res.send(data);
}

const addData = async (req: Request, res: Response) => {
    const { name, detail, image } = req.body;
    const data = await prisma.data.create({
        data: {
            name: name,
            detail: detail,
            image: image
        }
    })

    res.status(200).send(data)
}

const updateData = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const { name, detail, image } = req.body
    const data = await prisma.data.update({
        where: {
            id: id
        },
        data: {
            name: name,
            detail: detail,
            image: image
        }
    })

    res.send(data)
}

const deleteData = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const data = await prisma.data.delete({
        where: {
            id: id
        }
    })
    res.sendStatus(204)
}

export { getData, getOneData, addData, updateData, deleteData }