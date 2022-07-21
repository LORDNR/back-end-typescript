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

    },
    image: {
        in: 'body',
        isString: true,
    },
    cgId: {
        in: 'body',
        isInt: true,
        toInt: true
    },
    areaId: {
        in: 'body',
        isInt: true,
        toInt: true
    },

})

const updateDataSchema = checkSchema({
    id: {
        in: 'params',
        isInt: true,
        toInt: true

    },

})

const deleteDataSchema = checkSchema({
    id: {
        in: 'params',
        isInt: true,

        toInt: true,
    }
})



export { getOneDataSchema, addDataSchema, updateDataSchema, deleteDataSchema }