import { Request, Response, Router } from 'express'
import categoriesRouter from './categories'
import citiesRouter from './cities'
import linksRouter from './links'
import permissionRouter from './permission'
import productsRouter from './products'
import storesRouter from './stores'
import tokenRouter from './token'

const router = Router()

router.get('/', (_: Request, res: Response) => {
  return res.status(200).send({
    message: 'This is home!'
  })
})

router.use('/token', tokenRouter)
router.use('/cities', citiesRouter)
router.use('/stores', storesRouter)
router.use('/products', productsRouter)
router.use('/permission', permissionRouter)
router.use('/categories', categoriesRouter)
router.use('/links', linksRouter)


export default router