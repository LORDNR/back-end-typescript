import { Router } from 'express'
import { getArea, getAreaById, postArea } from '../controllers/area.controller';
import { getAreaByIdSchema, postAreaSchema } from '../schema/area.schema';

export const areaRoute = Router()

areaRoute.get('/', getArea);
areaRoute.get('/:id', getAreaByIdSchema, getAreaById);
areaRoute.post('/', postAreaSchema, postArea);
// areaRoute.get('/:id', getCategorySchema, getCategory);
// areaRoute.post('/', addCategorySchema, addCategory);
// areaRoute.put('/:id', updateCategorySchema, updateCategory);
// areaRoute.delete('/:id', deleteCategorySchema, deleteCategory);

