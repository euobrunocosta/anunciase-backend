import createAddress from '@domain/address/createAddress'
import createStore from '@domain/store/createStore'
import { Request, Response } from 'express'

const addStore = async (req: Request, res: Response) => {
  const {
    title,
    slug,
    image,
    street,
    number,
    neighbourhood,
    citiId
  } = req.body

  const addressData: TAddressCreate = {
    street,
    number,
    neighbourhood,
    citiId
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