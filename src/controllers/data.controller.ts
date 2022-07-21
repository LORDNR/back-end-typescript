import { Express, Request, Response } from "express"
import { validationResult } from "express-validator";
import prisma from '../db/prisma.db'
import uploadImage from '../services/firebase'



const getData = async (req: Request, res: Response) => {
    const data = await prisma.data.findMany({

    })

    if (data.length == 0) {
        let msg = "have not data";
    } else {
        let msg = "Successfully retrieved all data";
    }

    res.send(data)
}
const getDataByCgId = async (req: Request, res: Response) => {
    const cgId = Number(req.params.cgId)
    const data = await prisma.data.findMany({
        where: {
            cgId: cgId
        }
    })

    if (data.length == 0) {
        let msg = "have not data";
    } else {
        let msg = "Successfully retrieved all data";
    }

    res.send(data)
}

const getDataByAreaId = async (req: Request, res: Response) => {
    const cgId = Number(req.params.cgId)
    const areaId = Number(req.params.areaId)
    const data = await prisma.data.findMany({
        where: {
            cgId: cgId,
            areaId: areaId
        }
    })

    if (data.length == 0) {
        let msg = "have not data";
    } else {
        let msg = "Successfully retrieved all data";
    }

    res.send(data)
}

const getOneData = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const id = Number(req.params.id);
    const data = await prisma.data.findUnique({
        where: {
            id: id
        }
    })
    res.send(data);
}

const addData = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const file = req.file
    const image = await uploadImage(file)
    const { name, detail, cgId, areaId } = req.body;

    const data = await prisma.data.create({
        data: {
            name: name,
            detail: detail,
            image: image,
            cgId: Number(cgId),
            areaId: Number(areaId)

        }
    })

    res.status(201).send(data)
}

const updateData = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const file = req.file
    const image = await uploadImage(file)

    const id = Number(req.params.id)
    const { name, detail } = req.body
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const id = Number(req.params.id)
    const data = await prisma.data.delete({
        where: {
            id: id
        }
    })
    res.sendStatus(204)
}

export { getData, getDataByCgId, getDataByAreaId, getOneData, addData, updateData, deleteData }