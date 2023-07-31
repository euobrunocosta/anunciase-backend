import addCategory from '@controllers/category/addCategory'
import listCategories from '@controllers/category/listCategories'
import { Router } from 'express'

const categoriesRouter = Router()

categoriesRouter.get('/', listCategories)
categoriesRouter.post('/:tokenId', addCategory)

export default categoriesRouter