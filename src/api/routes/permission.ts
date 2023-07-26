import checkPermissionCreate from '@controllers/permission/getPermittedCity'
import { Router } from 'express'

const permissionRouter = Router()

permissionRouter.get('/token/:tokenId', checkPermissionCreate)

export default permissionRouter