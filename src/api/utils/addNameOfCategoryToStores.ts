const addNameOfCategoryToStores = (stores: TStore[], categorySlug: string) => {
  const [firstStore] = stores
  const { title: categoryTitle = '' } = firstStore.category.find(category => category.slug === categorySlug) || {}
  return {
    [categoryTitle]: stores
  }
}

export default addNameOfCategoryToStores