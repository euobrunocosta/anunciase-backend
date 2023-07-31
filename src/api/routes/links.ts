import addLink from '@controllers/link/addLink'
import { Router } from 'express'

const linksRouter = Router()

linksRouter.post('/:tokenId', addLink)

export default linksRouter