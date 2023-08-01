import getPermission from '@controllers/permission/getPermission'
import checkPermissionCreate from '@controllers/permission/getPermittedCity'
import { Router } from 'express'

const permissionRouter = Router()

permissionRouter.get('/', getPermission)
permissionRouter.get('/token/:tokenId/city', checkPermissionCreate)

export default permissionRouter