import Express, { Request, Response } from 'express'
import { validationResult } from 'express-validator';

import prisma from '../db/prisma.db'
// import uploadImage from '../services/firebase'

import admin from 'firebase-admin'

//firebase
const serviceAccount = require("../config/firebase-key.json");
const BUCKET = "project-icm.appspot.com"

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),

    storageBucket: BUCKET
});

const bucket = admin.storage().bucket()





const getCategories = async (req: Request, res: Response) => {
    const categories = await prisma.category.findMany();

    if (categories.length == 0) {
        let msg = "have not food";
    } else {
        let msg = "Successfully retrieved all Category";
    }

    res.status(200).send(categories);
}

const getCategory = async (req: Request, res: Response) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const id = Number(req.params.id);
    const category = await prisma.category.findUnique({
        where: { id: id },
    });
    res.send(category);



}

const addCategory = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }



    const { name, image } = req.body;

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


    const category = await prisma.category.create({
        data: {
            name: name,
            image: url[0]

        },
    });
    res.status(201).send(category);
}

const updateCategory = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const { name, image } = req.body;
    const id = Number(req.params.id);
    const category = await prisma.category.update({
        where: { id: id },
        data: {
            name: name,

            image: image,
        },
    });

    res.send(category);
}

const deleteCategory = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const id = Number(req.params.id);
    const category = await prisma.category.delete({
        where: { id: id },
    });

    res.sendStatus(204)
}

export { getCategories, getCategory, addCategory, updateCategory, deleteCategory }