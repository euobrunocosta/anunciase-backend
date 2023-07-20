import getStoreDetails from '@controllers/store/getStoreDetails'
import listStores from '@controllers/store/listSotres'
import { Router } from 'express'

const storesRouter = Router()

storesRouter.get('/city/:citySlug', listStores)
storesRouter.get('/:storeSlug', getStoreDetails)


export default storesRouter
