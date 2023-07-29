import getProducts from '@domain/product/getProducts'
import { Request, Response } from 'express'

type TQuery = {
  categoryIds: string[]
}

const listProductsByCategories = async (req: Request<{}, {}, {}, TQuery>, res: Response) => {
  const { categoryIds } = req.query

  const products = await getProducts(categoryIds)

  res.send(products)
}

export default listProductsByCategories