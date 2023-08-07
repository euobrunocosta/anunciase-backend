import { TOKEN_ERROR_MESSAGES } from '@controllers/constants'
import createLink from '@domain/link/createLink'
import getStore from '@domain/store/getStore'
import getToken from '@domain/token/getToken'
import { Request, Response } from 'express'

const addLink = async (req: Request, res: Response) => {
  const { tokenId } = req.params

  const {
    type,
    customTitle,
    url,
    storeSlug
  } = req.body

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

  const store = (await getStore(storeSlug)) as TStore

  if (!store) {
    return res.status(404).send({
      message: 'O slug da loja informado não pertence a nenhuma loja atualmente!'
    })
  }

  const linkData: TLinkCreate = {
    type,
    customTitle,
    url,
    storeId: store.id!
  }

  const newLink = await createLink(linkData)

  res.send({ newLink })
}

export default addLink