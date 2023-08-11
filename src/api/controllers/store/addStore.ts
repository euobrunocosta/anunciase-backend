import { TOKEN_ERROR_MESSAGES } from '@controllers/constants'
import createAddress from '@domain/address/createAddress'
import createStore from '@domain/store/createStore'
import getStore from '@domain/store/getStore'
import { Request, Response } from 'express'

const addStore = async (req: Request, res: Response) => {
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

  const existingStore = await getStore(slug)

  if (existingStore) {
    return res.status(400).send({
      message: 'O slug escolhido já está sendo usado por outra loja!'
    })
  }

  const addressData: TAddressData = {
    street,
    number,
    neighbourhood,
    extra,
    cityId
  }

  const newAddress = await createAddress(addressData)

  const storeData: TStoreData = {
    title,
    slug,
    image,
    owners,
    addressId: newAddress.id,
    tokenId: token.id
  }

  const categoryIds = (categories as string[]).map(id => ({ id }))
  const productIds = (products as string[]).map(id => ({ id }))

  const newStore = await createStore(storeData, categoryIds, productIds)

  res.send({ newStore })
}

export default addStore