import { checkSchema } from 'express-validator'

export const getCategorySchema = checkSchema({
    id: {
        in: 'params',
        isInt: true,

        toInt: true,
    }
})

export const addCategorySchema = checkSchema({
    name: {
        in: 'body',
        isString: true,

        notEmpty: true
    },
})

export const updateCategorySchema = checkSchema({
    id: {
        in: 'params',
        isInt: true,

        toInt: true,
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

export const deleteCategorySchema = checkSchema({
    id: {
        in: 'params',
        isInt: true,

        toInt: true,
    }
})






