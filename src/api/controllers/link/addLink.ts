import createLink from '@domain/link/createLink'
import getStore from '@domain/store/getStore'
import { Request, Response } from 'express'

const addLink = async (req: Request, res: Response) => {

  const {
    type,
    customTitle,
    url,
    storeSlug
  } = req.body

  const { token } = res.locals

  const store = (await getStore(storeSlug)) as TStore

  if (!store) {
    return res.status(404).send({
      message: 'O slug da loja informado não pertence a nenhuma loja atualmente!'
    })
  }

  if (!token.master && store.tokenId !== token.id) {
    return res.status(403).send({
      message: 'O token fornecido não tem permissão para editar esta loja!'
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