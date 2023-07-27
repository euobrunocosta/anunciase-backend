import createAddress from '@domain/address/createAddress'
import createStore from '@domain/store/createStore'
import getToken from '@domain/token/getToken'
import { Request, Response } from 'express'

const addStore = async (req: Request, res: Response) => {
  const { tokenId } = req.params

  const {
    title,
    slug,
    image,
    street,
    number,
    neighbourhood,
    cityId
  } = req.body

  const token = await getToken(tokenId);

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

  const addressData: TAddressCreate = {
    street,
    number,
    neighbourhood,
    citiId: cityId
  }

  const newAddress = await createAddress(addressData)

  const storeData: TStoreCreate = {
    title,
    slug,
    image,
    addressId: newAddress.id
  }
  const newStore = await createStore(storeData)

  res.send({ newStore })
}

export default addStore