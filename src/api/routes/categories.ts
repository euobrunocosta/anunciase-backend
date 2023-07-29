import listCategories from '@controllers/category/listCategories'
import { Router } from 'express'

const categoriesRouter = Router()

categoriesRouter.get('/', listCategories)

export default categoriesRouter