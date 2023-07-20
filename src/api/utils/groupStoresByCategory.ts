const groupStoresByCategory = (stores: TStore[], limit = 3) => {
  const groupedStores = stores.reduce((acc, currStore) => {
    const { category: currCategories } = currStore
    currCategories.forEach(category => {
      if (!acc[category.title]) {
        acc[category.title] = {
          slug: category.slug,
          more: false,
          stores: [currStore]
        }
        return
      }

      if (acc[category.title].stores.length >= limit) {
        if (acc[category.title].stores.length === limit) acc[category.title].more = true
        return
      }

      acc[category.title].stores.push(currStore)
    })

    return acc
  }, {} as TStoresByCategory)

  return groupedStores
}

export default groupStoresByCategory