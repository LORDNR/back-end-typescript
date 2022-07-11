import { Router } from "express";
import { getData, getOneData, addData, updateData, deleteData } from '../controllers/data.controller'

export const dataRoute = Router();

dataRoute.get('/', getData)
dataRoute.get('/:id', getOneData)
dataRoute.post('/', addData)
dataRoute.put('/:id', updateData)
dataRoute.delete('/:id', deleteData)

