import addLink from '@controllers/link/addLink'
import removeLink from '@controllers/link/removeLink'
import verifyTokenMiddleware from '@controllers/token/verifyTokenMiddleware'
import { Router } from 'express'

const linksRouter = Router()

linksRouter.post('/:tokenId', verifyTokenMiddleware, addLink)
linksRouter.delete('/:tokenId', verifyTokenMiddleware, removeLink)

export default linksRouter