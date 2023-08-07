import { TOKEN_ERROR_MESSAGES } from '@controllers/constants'
import getToken from '@domain/token/getToken'
import { NextFunction, Request, Response } from 'express'

const verifyTokenMiddleware = async(req: Request, res: Response, next: NextFunction) => {
  const { tokenId } = req.params

  const token = await getToken(tokenId)

  if (!token) {
    return res.status(403).send({
      message: TOKEN_ERROR_MESSAGES.INVALID
    })
  }

  if (!token.active) {
    return res.status(403).send({
      message: TOKEN_ERROR_MESSAGES.INACTIVE
    })
  }

  res.locals.token = token

  next()
}

export default verifyTokenMiddleware