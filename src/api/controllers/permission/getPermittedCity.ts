import getToken from '@domain/token/getToken'
import { Request, Response } from 'express'

const getPermittedCity = async (req: Request, res: Response) => {
  const { tokenId } = req.params

  const token = await getToken(tokenId)

  if (!token) {
    return res.status(403).send({
      message: 'This token is invalid'
    })
  }

  if (!token?.active) {
    return res.status(403).send({
      message: 'This token is currently not active'
    })
  }

  res.status(200).send({ city: token.city })
}

export default getPermittedCity