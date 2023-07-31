import prisma from '@infra/PrismaService'

const createStore = async (store: TStoreCreate, categoryIds: TConnect[], productIds: TConnect[]) => {
  const newStore = await prisma.store.create({
    data: {
      ...store,
      category: {
        connect: categoryIds
      },
      products: {
        connect: productIds
      }
    },
    include: {
      address: true,
      category: true,
      products: true
    }
  })

  return newStore
}

export default createStore