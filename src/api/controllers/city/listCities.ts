import getCities from '@domain/city/getCities'
import { Request, Response } from 'express'

const listCities = async (_: Request, res: Response) => {
  const cities = await getCities()
  res.send({ cities })
}

export default listCities