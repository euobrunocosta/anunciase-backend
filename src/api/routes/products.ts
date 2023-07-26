
import getProductDetails from '@controllers/product/getProductDetails'
import { Router } from 'express'

const productsRouter = Router()

productsRouter.get('/:productSlug', getProductDetails)

export default productsRouter
