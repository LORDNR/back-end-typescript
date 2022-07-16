import { Express, Request, Response } from "express"
import { validationResult } from "express-validator";
import prisma from '../db/prisma.db'

import admin from 'firebase-admin'

//firebase
const serviceAccount = require("../config/firebase-key.json");
const BUCKET = "project-icm.appspot.com"

if (!admin.apps.length) {
    const firebaseAdmin = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),

        storageBucket: BUCKET
    });
}


const bucket = admin.storage().bucket()





const getData = async (req: Request, res: Response) => {
    const data = await prisma.data.findMany({

    })

    if (data.length == 0) {
        let msg = "have not food";
    } else {
        let msg = "Successfully retrieved all Category";
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
        let msg = "have not food";
    } else {
        let msg = "Successfully retrieved all Category";
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


    const imageFile = req.file
    const fileName = Date.now() + "." + imageFile?.originalname.split(".").pop()

    const file = bucket.file(fileName)
    // bucket.upload('', {})

    const stream = file.createWriteStream({
        metadata: {
            contentType: imageFile?.mimetype,
        }
    })

    stream.end(imageFile?.buffer)
    const time = new Date().setDate(new Date().getFullYear() + 50)
    const url = await file.getSignedUrl({
        action: "read",
        expires: time
    })

    const { name, detail, image, cgId } = req.body;
    const data = await prisma.data.create({
        data: {
            name: name,
            detail: detail,
            image: url[0],
            cgId: Number(cgId)
        }
    })

    res.status(200).send(data)
}

const updateData = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

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

export { getData, getDataByCgId, getOneData, addData, updateData, deleteData }