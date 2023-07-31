import prisma from '@infra/PrismaService'

const createProduct = async (product: TProductCreate) => {
  const newProduct = await prisma.product.create({
    data: product
  })

  return newProduct
}

export default createProduct