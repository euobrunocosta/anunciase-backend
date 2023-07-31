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

type TAddressCreate = {
  street: string
  number: string
  neighbourhood: string
  cityId: string
}

type TStore = {
  id?: string
  category: TCategory[]
  link: TLink[]
}

type TStoreCreate = {
  title: string
  slug: string
  image: string
  addressId: string
}

type TCategoryCreate = {
  title: string
  slug: string
}

type TProductCreate = TCategoryCreate & {
  categoryId: string
}

type TLinkCreate = {
  type: number
  customTitle: string
  url: string
  storeId: string
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

type TRequestParamsProductDetails = {
  productSlug
}

type TRequestQueryListSotores = {
  categorySlug?: string
  limit?: number
}

type TRequestParamsStoreDetails = {
  storeSlug: string
}

type TConnect = {
  id: string
}
