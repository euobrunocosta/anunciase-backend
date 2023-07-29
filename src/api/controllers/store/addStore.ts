import createAddress from '@domain/address/createAddress'
import createStore from '@domain/store/createStore'
import getStore from '@domain/store/getStore'
import getToken from '@domain/token/getToken'
import { Request, Response } from 'express'

const addStore = async (req: Request, res: Response) => {
  const { tokenId } = req.params

  const {
    title,
    slug,
    image,
    categories,
    products,
    street,
    number,
    neighbourhood,
    cityId
  } = req.body

  const token = await getToken(tokenId)

  if (!token) {
    return res.status(403).send({
      message: 'This token is invalid'
    })
  }

  if (!token.active) {
    return res.status(403).send({
      message: 'This token is not active'
    })
  }

  if (token.cityId !== cityId) {
    return res.status(403).send({
      message: 'This token does\'t have permission to create stores on that city'
    })
  }

  const existingStore = await getStore(slug);

  if (existingStore) {
    return res.status(400).send({
      message: 'This slug already belongs to an existing store'
    })
  }

  const addressData: TAddressCreate = {
    street,
    number,
    neighbourhood,
    cityId
  }

  const newAddress = await createAddress(addressData)

  const storeData: TStoreCreate = {
    title,
    slug,
    image,
    addressId: newAddress.id,
  }

  const categoryIds = (categories as string[]).map(id => ({ id }))
  const productIds = (products as string[]).map(id => ({ id }))
  
  const newStore = await createStore(storeData, categoryIds, productIds)

  res.send({ newStore })
}

export default addStore