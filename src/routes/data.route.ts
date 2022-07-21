import { Router } from "express";
import { getData, getDataByCgId, getDataByAreaId, getOneData, addData, updateData, deleteData } from '../controllers/data.controller'
import { getOneDataSchema, addDataSchema, updateDataSchema, deleteDataSchema } from '../schema/data.schema'

export const dataRoute = Router();

dataRoute.get('/', getData)
dataRoute.get('/cgId/:cgId', getDataByCgId)
dataRoute.get('/cgId/:cgId/areaId/:areaId', getDataByAreaId)
dataRoute.get('/:id', getOneDataSchema, getOneData)
dataRoute.post('/', addDataSchema, addData)
dataRoute.put('/:id', updateDataSchema, updateData)
dataRoute.delete('/:id', deleteDataSchema, deleteData)

