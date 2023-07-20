import getCity from '@domain/city/getCity'
import { Request, Response } from 'express'

const getCityDetails = async (req: Request<TRequestParamsCityDetails>, res: Response) => {
  const { citySlug } = req.params

  const city = await getCity(citySlug)

  res.send(city)
}

export default getCityDetails