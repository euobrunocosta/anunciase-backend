import prisma from '@infra/PrismaService'

const getProduct = async (productSlug: string) => {
  const product = await prisma.product.findFirst({
    where: {
      slug: productSlug,
    },
    include: {
      category: true
    }
  })

  return product as unknown
}

export default getProduct