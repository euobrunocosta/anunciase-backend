import { TOKEN_ERROR_MESSAGES } from '@controllers/constants'
import createLink from '@domain/link/createLink'
import getToken from '@domain/token/getToken'
import { Request, Response } from 'express'

const addLink = async (req: Request, res: Response) => {
  const { tokenId } = req.params

  const {
    type,
    customTitle,
    url,
    storeId
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

  const linkData: TLinkCreate = {
    type,
    customTitle,
    url,
    storeId
  }

  const newLink = await createLink(linkData)

  res.send({ newLink })
}

export default addLink