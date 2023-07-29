import prisma from '@infra/PrismaService'

const getProducts = async (categoryIds: string[]) => {
  if (!categoryIds.length) return

  const products = await prisma.product.findMany({
    where: {
      category: {
        id: {
          in: categoryIds
        }
      }
    },
    include: {
      category: true
    }
  })

  return products
}

export default getProducts