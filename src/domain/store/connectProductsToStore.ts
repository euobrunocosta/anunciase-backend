import prisma from '@infra/PrismaService'

const connectProductsToStore = async (productIds: TConnect[], storeSlug: string) => {
  const updatedStore = await prisma.store.update({
    data: {
      products: {
        connect: productIds
      }
    },
    where: {
      slug: storeSlug
    },
    include: {
      address: true,
      category: true,
      products: true
    }
  })

  return updatedStore
}

export default connectProductsToStore