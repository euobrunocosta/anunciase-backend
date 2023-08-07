import connectProductsToStore from '@domain/store/connectProductsToStore'
import getStore from '@domain/store/getStore'
import { Request, Response } from 'express'

const addProductsToStore = async (req: Request, res: Response) => {
  const { storeSlug, productIds } = req.body

  const existingStore = await getStore(storeSlug)

  if (!existingStore) {
    return res.status(400).send({
      message: 'O slug fornecido não pertence a uma loja registrada!'
    })
  }

  const storeIsInPermittedCity = (existingStore as TStore).address.city.id === res.locals.token.city.id

  if (!storeIsInPermittedCity) {
    return res.status(400).send({
      message: 'O token fornecido não tem permissão para adcionar dados a lojas nessa cidade'
    })
  }

  const updatedStore = await connectProductsToStore(productIds, storeSlug)

  res.send({ updatedStore })
}

export default addProductsToStore