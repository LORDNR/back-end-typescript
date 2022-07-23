import { Express, Request, Response } from "express"
import { validationResult } from "express-validator";
import prisma from '../db/prisma.db'


const getArea = async (req: Request, res: Response) => {
    const area = await prisma.area.findMany({
    })

    if (area.length == 0) {
        let msg = "have not area";
    } else {
        let msg = "Successfully retrieved all area";
    }

    res.send(area)
}

const getAreaById = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const id = Number(req.params.id);
    const area = await prisma.area.findUnique({
        where: {
            id: id
        }
    })
    res.send(area);
}

const postArea = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const { name } = req.body;

    const area = await prisma.area.create({
        data: {
            name: name,
        }
    })

    res.status(201).send(area)
}

export { getArea, getAreaById, postArea }