import { TOKEN_ERROR_MESSAGES } from '@controllers/constants'
import getToken from '@domain/token/getToken'
import { Request, Response } from 'express'

const getPermission = async (req: Request, res: Response) => {
  const { tokenId } = req.query

  const token = await getToken(tokenId as string)

  if (!token) {
    return res.status(403).send({
      message: TOKEN_ERROR_MESSAGES.INVAILD
    })
  }

  if (!token?.active) {
    return res.status(403).send({
      message: TOKEN_ERROR_MESSAGES.INACTIVE
    })
  }

  res.send({ hasPermission: true })
}

export default getPermission