import { LinkTitles } from '@domain/link/constant'

const addLinkTitlesToStore = (store: TStore) => {
  const { link: links = [] } = store || {}
  const linksWithTitles = links.map(link => ({
    ...link,
    title: LinkTitles[link.type] || link.customTitle
  }))

  return {
    ...store,
    link: linksWithTitles
  }
}

export default addLinkTitlesToStore