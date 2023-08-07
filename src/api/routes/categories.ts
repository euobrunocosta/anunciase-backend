import addCategory from '@controllers/category/addCategory'
import listCategories from '@controllers/category/listCategories'
import verifyTokenMiddleware from '@controllers/token/verifyTokenMiddleware'
import { Router } from 'express'

const categoriesRouter = Router()

categoriesRouter.get('/', listCategories)
categoriesRouter.post('/:tokenId', verifyTokenMiddleware, addCategory)

export default categoriesRouter