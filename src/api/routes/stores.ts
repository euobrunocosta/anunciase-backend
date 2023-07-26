import addStore from '@controllers/store/addStore'
import getStoreDetails from '@controllers/store/getStoreDetails'
import listStores from '@controllers/store/listSotres'
import { Router } from 'express'

const storesRouter = Router()

storesRouter.get('/city/:citySlug', listStores)
storesRouter.get('/:storeSlug', getStoreDetails)
storesRouter.post('/:tokenId', addStore)


export default storesRouter
