import getCategories from '@domain/category/getCategories'
import { Request, Response } from 'express'

const listCategories = async (_: Request, res: Response) => {
  const categories = await getCategories()
  res.send({ categories })
}

export default listCategories