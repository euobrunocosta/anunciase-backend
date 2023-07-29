import prisma from '@infra/PrismaService'

const getCategories = async () => {
  const categories = await prisma.category.findMany()
  return categories
}

export default getCategories