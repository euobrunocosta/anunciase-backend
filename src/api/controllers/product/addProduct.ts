import { TOKEN_ERROR_MESSAGES } from '@controllers/constants'
import createProduct from '@domain/product/createProduct'
import getProduct from '@domain/product/getProduct'
import getToken from '@domain/token/getToken'
import { Request, Response } from 'express'

const addProduct = async (req: Request, res: Response) => {
  const { tokenId } = req.params

  const {
    title,
    slug,
    categoryId,
  } = req.body

  const token = await getToken(tokenId)

  if (!token) {
    return res.status(403).send({
      message: TOKEN_ERROR_MESSAGES.INVAILD
    })
  }

  if (!token.active) {
    return res.status(403).send({
      message: TOKEN_ERROR_MESSAGES.INACTIVE
    })
  }

  const existingProduct = await getProduct(slug);

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