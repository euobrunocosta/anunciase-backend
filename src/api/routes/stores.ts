import addStore from '@controllers/store/addStore'
import editStore from '@controllers/store/editStore'
import getStoreDetails from '@controllers/store/getStoreDetails'
import listStores from '@controllers/store/listSotres'
import verifyTokenMiddleware from '@controllers/token/verifyTokenMiddleware'
import { Router } from 'express'

const storesRouter = Router()

storesRouter.get('/city/:citySlug', listStores)
storesRouter.get('/:storeSlug', getStoreDetails)
storesRouter.post('/:tokenId', verifyTokenMiddleware, addStore)
storesRouter.put('/:tokenId', verifyTokenMiddleware, editStore)

export default storesRouter
