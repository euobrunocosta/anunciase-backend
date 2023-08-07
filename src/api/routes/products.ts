
import addProduct from '@controllers/product/addProduct'
import getProductDetails from '@controllers/product/getProductDetails'
import listProductsByCategories from '@controllers/product/listProductsByCategories'
import verifyTokenMiddleware from '@controllers/token/verifyTokenMiddleware'
import { Router } from 'express'

const productsRouter = Router()

productsRouter.get('/list', listProductsByCategories)
productsRouter.get('/:productSlug', getProductDetails)
productsRouter.post(
  '/:tokenId',
  verifyTokenMiddleware,
  addProduct
)

export default productsRouter
