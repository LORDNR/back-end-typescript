import { checkSchema } from 'express-validator'

const getAreaByIdSchema = checkSchema({
    id: {
        in: 'params',
        isInt: true,
        toInt: true,
    }
})

const postAreaSchema = checkSchema({
    name: {
        in: 'body',
        isString: true,

    },
})

export { getAreaByIdSchema, postAreaSchema }