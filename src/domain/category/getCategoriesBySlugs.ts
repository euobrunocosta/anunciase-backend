import prisma from '@infra/PrismaService'

const getCategoriesBySlugs = async (slugs: string[]) => {
  const categories = await prisma.category.findMany({
    where: {
      slug: {
        in: slugs
      }
    }
  })

  return categories
}

export default getCategoriesBySlugs