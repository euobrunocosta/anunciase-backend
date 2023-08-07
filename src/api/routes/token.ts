import getTokenDetails from '@controllers/token/getTokenDetails'
import verifyTokenMiddleware from '@controllers/token/verifyTokenMiddleware'
import { Router } from 'express'

const tokenRouter = Router()

tokenRouter.get(
  '/:tokenId',
  verifyTokenMiddleware,
  getTokenDetails
)

export default tokenRouter