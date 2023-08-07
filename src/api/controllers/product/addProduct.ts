import createProduct from '@domain/product/createProduct'
import getProduct from '@domain/product/getProduct'
import { Request, Response } from 'express'

const addProduct = async (req: Request, res: Response) => {
  const {
    title,
    slug,
    categoryId,
  } = req.body

  const existingProduct = await getProduct(slug)

  if (existingProduct) {
    return res.status(400).send({
      message: 'O slug escolhido já está sendo usado por outro produto!'
    })
  }

  const productData: TProductCreate = {
    title,
    slug,
    categoryId
  }

  const newProduct = await createProduct(productData)

  res.send({ newProduct })
}

export default addProduct