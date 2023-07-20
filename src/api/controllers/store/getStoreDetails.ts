import getStore from '@domain/store/getStore'
import addLinkTitlesToStore from '@utils/addLinkTitlesToStore'
import { Request, Response } from 'express'

const getStoreDetails = async (req: Request<TRequestParamsStoreDetails>, res: Response) => {
  const { storeSlug } = req.params

  const store = await getStore(storeSlug)
  const storeWithLinkTitles = addLinkTitlesToStore(store as TStore)

  res.send(storeWithLinkTitles)
}

export default getStoreDetails