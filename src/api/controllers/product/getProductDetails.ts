import getProduct from '@domain/product/getProduct'
import { Request, Response } from 'express'

const getProductDetails = async (req: Request<TRequestParamsProductDetails>, res: Response) => {
  const { productSlug } = req.params

  const product = await getProduct(productSlug)

  res.send(product)
}

export default getProductDetails