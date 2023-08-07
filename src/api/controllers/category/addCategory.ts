import createCategory from '@domain/category/createCategory'
import getCategoriesBySlugs from '@domain/category/getCategoriesBySlugs'
import { Request, Response } from 'express'

const addCategory = async (req: Request, res: Response) => {
  const {
    title,
    slug
  } = req.body

  const [existingCategory] = await getCategoriesBySlugs([slug])

  if (existingCategory) {
    return res.status(400).send({
      message: 'O slug escolhido já está sendo usado por outra categoria!'
    })
  }

  const catgoryData: TCategoryCreate = {
    title,
    slug
  }

  const newCategory = await createCategory(catgoryData)

  res.send({ newCategory })
}

export default addCategory