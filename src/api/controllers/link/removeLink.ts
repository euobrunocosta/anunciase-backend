import deleteLink from '@domain/link/deleteLink'
import getStore from '@domain/store/getStore'
import { Request, Response } from 'express'

const removeLink = async (req: Request, res: Response) => {
  const {
    linkId,
    storeSlug
  } = req.query

  const store = (await getStore(storeSlug as string)) as TStore

  if (!store) {
    return res.status(404).send({
      message: 'O slug da loja informado não pertence a nenhuma loja atualmente!'
    })
  }

  const { token } = res.locals

  if (!token.master && store.tokenId !== token.id) {
    return res.status(403).send({
      message: 'O token fornecido não tem permissão para editar esta loja!'
    })
  }

  await deleteLink(linkId as string)

  res.send({ success: true })
}

export default removeLink