import prisma from '@infra/PrismaService'

const updateStore = async (store: TStoreData, categoryIds: TConnect[], productIds: TConnect[]) => {
  const updatedStore = await prisma.store.update({
    where: {
      id: store.id
    },
    data: {
      ...store,
      category: {
        set: [],
        connect: categoryIds
      },
      products: {
        set: [],
        connect: productIds
      }
    },
    include: {
      address: true,
      category: true,
      products: true
    }
  })

  return updatedStore
}

export default updateStore