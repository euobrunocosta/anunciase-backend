import addToken from '@controllers/token/addToken'
import getTokenDetails from '@controllers/token/getTokenDetails'
import verifyTokenMiddleware from '@controllers/token/verifyTokenMiddleware'
import { Router } from 'express'

const tokenRouter = Router()

tokenRouter.get(
  '/:tokenId',
  verifyTokenMiddleware,
  getTokenDetails
)

tokenRouter.post(
  '/:tokenId',
  verifyTokenMiddleware,
  addToken
)

export default tokenRouter