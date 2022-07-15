
import { Router } from 'express'

import { getCategories, getCategory, addCategory, updateCategory, deleteCategory } from '../controllers/category.controller'
import { getCategorySchema, addCategorySchema, updateCategorySchema, deleteCategorySchema } from '../schema/category.schema'


export const categoryRouter = Router()



categoryRouter.get('/', getCategories);
categoryRouter.get('/:id', getCategorySchema, getCategory);
categoryRouter.post('/', addCategorySchema, addCategory);
categoryRouter.put('/:id', updateCategorySchema, updateCategory);
categoryRouter.delete('/:id', deleteCategorySchema, deleteCategory);

