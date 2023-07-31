
import addProduct from '@controllers/product/addProduct'
import getProductDetails from '@controllers/product/getProductDetails'
import listProductsByCategories from '@controllers/product/listProductsByCategories'
import { Router } from 'express'

const productsRouter = Router()

productsRouter.get('/list', listProductsByCategories)
productsRouter.get('/:productSlug', getProductDetails)
productsRouter.post('/:tokenId', addProduct)

export default productsRouter
