type TCategory = {
  id: string
  title: string
  slug: string
}

type TLink = {
  title: string
  type: number
  customTitle: string
}

type TStore = {
  category: TCategory[]
  link: TLink[]
}

type TStoresByCategory = {
  [key: string]: {
    slug: string
    more: boolean
    stores: TStore[]
  }
}

type TRequestParamsListSotores = {
  citySlug: string
}

type TRequestParamsCityDetails = TRequestParamsListSotores

type TRequestQueryListSotores = {
  categorySlug?: string
  limit?: number
}

type TRequestParamsStoreDetails = {
  storeSlug: string
}
