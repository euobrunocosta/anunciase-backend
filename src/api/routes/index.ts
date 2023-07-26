import { Request, Response, Router } from 'express'
import citiesRouter from './cities'
import permissionRouter from './permission'
import productsRouter from './products'
import storesRouter from './stores'

const router = Router()

router.get('/', (_: Request, res: Response) => {
  return res.status(200).send({
    message: 'This is home!'
  })
})

router.use('/cities', citiesRouter)
router.use('/stores', storesRouter)
router.use('/products', productsRouter)
router.use('/permission', permissionRouter)


export default router