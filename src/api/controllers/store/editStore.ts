import { TOKEN_ERROR_MESSAGES } from '@controllers/constants'
import updateAddress from '@domain/address/updateAddress'
import getStore from '@domain/store/getStore'
import updateStore from '@domain/store/updateStore'
import { Request, Response } from 'express'

const editStore = async (req: Request, res: Response) => {
  const {
    title,
    slug,
    image,
    owners,
    categories,
    products,
    street,
    number,
    neighbourhood,
    extra,
    cityId
  } = req.body

  const { token } = res.locals

  if (token.cityId !== cityId) {
    return res.status(403).send({
      message: TOKEN_ERROR_MESSAGES.CITY
    })
  }

  const store = await getStore(slug)

  if (!store) {
    return res.status(404).send({
      message: 'O slug fornecido não pertence a nenhuma loja!'
    })
  }

  if (!token.master && (store as TStore).tokenId !== token.id) {
    return res.status(403).send({
      message: 'O token fornecido não tem permissão para editar esta loja!'
    })
  }

  const addressData: TAddressData = {
    street,
    number,
    neighbourhood,
    extra,
    cityId
  }

  await updateAddress(
    addressData,
    (store as TStore).addressId
  )

  const storeData: TStoreData = {
    id: (store as TStore).id,
    title,
    slug,
    image,
    owners,
    addressId: (store as TStore).addressId,
    tokenId: (store as TStore).tokenId,
  }

  const categoryIds = (categories as string[]).map(id => ({ id }))
  const productIds = (products as string[]).map(id => ({ id }))

  const updatedStore = await updateStore(storeData, categoryIds, productIds)

  res.send({ updatedStore })
}

export default editStore