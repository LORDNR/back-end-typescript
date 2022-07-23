import { Router } from 'express'
import { getCategories, getCategory, addCategory, updateCategory, deleteCategory } from '../controllers/category.controller'
import { getCategorySchema, addCategorySchema, updateCategorySchema, deleteCategorySchema } from '../schema/category.schema'

export const categoryRoute = Router()

categoryRoute.get('/', getCategories);
categoryRoute.get('/:id', getCategorySchema, getCategory);
categoryRoute.post('/', addCategorySchema, addCategory);
categoryRoute.put('/:id', updateCategorySchema, updateCategory);
categoryRoute.delete('/:id', deleteCategorySchema, deleteCategory);

