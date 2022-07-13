import { checkSchema } from 'express-validator'

const getOneDataSchema = checkSchema({
    id: {
        in: 'params',
        isInt: true,
        toInt: true
    }
})

const addDataSchema = checkSchema({
    name: {
        in: 'body',
        isString: true,
        notEmpty: true
    },
    image: {
        in: 'body',
        isString: true,
        notEmpty: true
    }
})

const updateDataSchema = checkSchema({
    id: {
        in: 'params',
        isInt: true,
        toInt: true
    },
    name: {
        in: 'body',
        isString: true,


    },
    image: {
        in: 'body',
        isString: true,
    }
})

const deleteDataSchema = checkSchema({
    id: {
        in: 'params',
        isInt: true,

        toInt: true,
    }
})



export { getOneDataSchema, addDataSchema, updateDataSchema, deleteDataSchema }