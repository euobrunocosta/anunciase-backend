import getCityDetails from '@controllers/city/getCityDetails'
import listCities from '@controllers/city/listCities'
import { Router } from 'express'

const citiesRouter = Router()

citiesRouter.get('/', listCities)
citiesRouter.get('/:citySlug', getCityDetails)

export default citiesRouter