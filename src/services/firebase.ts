import e, { Express, Request, Response } from 'express';
import admin from 'firebase-admin'

const serviceAccount = require("../config/firebase-key.json");

const BUCKET = "project-icm.appspot.com"
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),

    storageBucket: BUCKET
});

const bucket = admin.storage().bucket()

const uploadImage = async (uploadFile: any) => {
    const image = uploadFile
    const fileName = Date.now() + "." + image.originalname.split(".").pop()
    const file = bucket.file(fileName)
    const stream = file.createWriteStream({
        metadata: {
            contentType: image.mimetype,
        }
    })

    stream.end(image.buffer)

    const time = new Date().setDate(new Date().getFullYear() + 50)
    const url = await file.getSignedUrl({
        action: "read",
        expires: time
    })

    return url[0]
}


export default uploadImage
