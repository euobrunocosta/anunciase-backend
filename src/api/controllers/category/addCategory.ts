import { TOKEN_ERROR_MESSAGES } from '@controllers/constants'
import createCategory from '@domain/category/createCategory'
import getCategoriesBySlugs from '@domain/category/getCategoriesBySlugs'
import getToken from '@domain/token/getToken'
import { Request, Response } from 'express'

const addCategory = async (req: Request, res: Response) => {
  const { tokenId } = req.params

  const {
    title,
    slug
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

  const [existingCategory] = await getCategoriesBySlugs([slug]);

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