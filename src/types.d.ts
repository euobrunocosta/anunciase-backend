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

type TAddress = {
  city: TCity
}

type TCity = {
  id: string
  slug: string
}

type TAddressData = {
  street: string
  number: string
  neighbourhood: string
  extra: string
  cityId: string
}

type TStore = {
  id?: string
  category: TCategory[]
  link: TLink[]
  address: TAddress
  addressId: string
  tokenId: string
}

type TStoreData = {
  id?: string
  title: string
  slug: string
  image: string
  owners: string
  addressId: string
  tokenId: string
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

type TTokenCreate = {
  active: boolean
  master: boolean
  generate: boolean
  cityId: string
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
