import { checkSchema } from 'express-validator'

const getOneByIdSchema = checkSchema({
    id: {
        in: 'params',
        isInt: true,
        toInt: true
    }
})

const registerSchema = checkSchema({
    username: {
        in: 'body',
        isString: true,
        notEmpty: true
    },
    password: {
        in: 'body',
        isString: true,
        notEmpty: true
    }
})

export { getOneByIdSchema, registerSchema }