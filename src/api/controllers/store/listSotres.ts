import getStores from '@domain/store/getStores'
import addNameOfCategoryToStores from '@utils/addNameOfCategoryToStores'
import groupStoresByCategory from '@utils/groupStoresByCategory'
import { Request, Response } from 'express'

const listStores = async (
  req: Request<
      TRequestParamsListSotores,
      unknown,
      unknown,
      TRequestQueryListSotores
    >,
  res: Response
) => {
  const { citySlug } = req.params
  const { categorySlug, limit } = req.query

  const stores = await getStores(citySlug, categorySlug)
  const groupedStores = categorySlug
    ? addNameOfCategoryToStores(stores as TStore[], categorySlug)
    : groupStoresByCategory(stores as TStore[], limit)

  res.send(groupedStores)
}

export default listStores